#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const rootDir = __dirname;
const srcDir = path.join(rootDir, 'src');
const outDir = path.join(rootDir, 'dist', 'sss');

function removeDirRecursive(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  for (const entry of fs.readdirSync(dirPath)) {
    const fullPath = path.join(dirPath, entry);
    if (fs.lstatSync(fullPath).isDirectory()) {
      removeDirRecursive(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  }
  fs.rmdirSync(dirPath);
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else if (!src.endsWith('.ts')) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

console.log('Building Super Sexy Squad (TypeScript 7.1 + Web Components)...');
removeDirRecursive(outDir);
fs.mkdirSync(outDir, { recursive: true });

// Resolve TypeScript 7.1 native binary (@typescript/typescript-<platform>-<arch>/lib/tsc)
const platformPkg = `@typescript/typescript-${process.platform}-${process.arch}`;
const pkgJsonPath = require.resolve(`${platformPkg}/package.json`);
const exeName = process.platform === 'win32' ? 'tsc.exe' : 'tsc';
const nativeTsc = path.join(path.dirname(pkgJsonPath), 'lib', exeName);

const versionOut = execFileSync(nativeTsc, ['--version'], { encoding: 'utf8' }).trim();
console.log(`Using compiler: ${versionOut} (${nativeTsc})`);

execFileSync(nativeTsc, ['-p', path.join(rootDir, 'tsconfig.json')], { stdio: 'inherit' });

const staticFiles = ['index.html', 'favicon.ico', 'robots.txt', 'sitemap.xml', 'manifest.webmanifest'];
for (const file of staticFiles) {
  copyRecursive(path.join(srcDir, file), path.join(outDir, file));
}
copyRecursive(path.join(srcDir, 'assets'), path.join(outDir, 'assets'));
copyRecursive(path.join(srcDir, 'styles'), path.join(outDir, 'styles'));

// Mirror output to dist/ root so CodeBuild artifact base-directory works whether set to 'dist' or 'dist/sss'
for (const entry of fs.readdirSync(outDir)) {
  if (entry !== 'sss') {
    copyRecursive(path.join(outDir, entry), path.join(rootDir, 'dist', entry));
  }
}

console.log('Build complete -> dist/sss');
