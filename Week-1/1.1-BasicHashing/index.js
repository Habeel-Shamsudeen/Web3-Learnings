const crypto = require('crypto')
const input = "Habeel";
const Hash = crypto.createHash('sha256').update(input).digest('hex');
console.log(Hash)