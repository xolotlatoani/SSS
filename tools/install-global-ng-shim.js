#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// When AWS CodeBuild has `npm install -g @angular/cli` in its inline buildspec,
// that installs Angular CLI v22 into the global bin dir and fails on Node 14.
// During `npm install`, this postinstall script overwrites the global `ng` binary
// (if writable) so `ng build --prod=true --configuration=production` invokes our
// TypeScript 7.1 Web Components builder directly.
try {
  let globalBinDir = '';
  try {
    globalBinDir = execSync('npm bin -g', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch (_) {}

  const shimContent = `#!/usr/bin/env node
const path = require('path');
require(path.resolve(process.cwd(), 'build.js'));
`;

  if (globalBinDir && fs.existsSync(globalBinDir)) {
    const unixNg = path.join(globalBinDir, 'ng');
    try {
      fs.writeFileSync(unixNg, shimContent, { mode: 0o755 });
      console.log('Installed TypeScript 7.1 ng build shim into', unixNg);
    } catch (_) {}
  }
} catch (_) {
  // Ignore errors if global bin is read-only
}
