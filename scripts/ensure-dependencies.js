const { existsSync } = require('fs');
const { spawnSync } = require('child_process');

const reactScriptsBin = process.platform === 'win32'
  ? 'node_modules/.bin/react-scripts.cmd'
  : 'node_modules/.bin/react-scripts';

if (!existsSync(reactScriptsBin)) {
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const result = spawnSync(npm, ['ci'], { stdio: 'inherit', shell: false });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}
