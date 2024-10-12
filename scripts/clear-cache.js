const fs = require('fs');
const path = require('path');

function clearCache() {
    const cachePath = path.resolve(__dirname, '../node_modules/.cache');

    fs.rm(cachePath, { recursive: true, force: true }, (err) => {
        if (err) {
            console.error(`error removing cache folder: ${err.message}`);
        } else {
            console.log('cache folder removed successfully.');
        }
    });
}

clearCache();