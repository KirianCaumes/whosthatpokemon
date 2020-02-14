var request = require('request');
var fs = require('fs')

var download = (uri, filename, callback) => {
    request.head(uri, (err, res, body) => {
        request(uri).pipe(fs.createWriteStream(`images/${filename}`)).on('close', callback);
    })
}

for (let index = 1; index < 900; index++) {
    download(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('000' + index).substr(-3)}.png`, `${index}.png`, () => console.log('done'))
}