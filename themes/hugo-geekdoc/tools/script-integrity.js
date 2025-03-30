const fs = require('fs');
const crypto = require('crypto');

const filePath = '../static/js/groupdocs-25.3.0.js';
const fileBuffer = fs.readFileSync(filePath);

const hash = crypto.createHash('sha512');
hash.update(fileBuffer);

const integrity = 'sha512-' + hash.digest('base64');
console.log(integrity);