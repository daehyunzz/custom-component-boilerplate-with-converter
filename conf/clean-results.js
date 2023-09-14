const path = require('path');
const fs = require('fs');

const { commonPaths } = require('./common');

console.log('Deleting previous files...');
fs.rmSync(path.join(commonPaths.rootPath, 'dist'), { recursive: true, force: true });
