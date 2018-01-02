var fs = require('fs')
var htmlNavbar = fs.readFileSync(__dirname + '/templates/navbar.html', 'utf8')

function runAtBegin($templateCache) {
   $templateCache.put('navbar.html', htmlNavbar);
 }

 module.exports = runAtBegin
