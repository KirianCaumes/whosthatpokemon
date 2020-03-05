var fs = require("fs");

var all_data = [];
var all_language = ["de","en","fr","ja","ko","zh-hans","zh-hant"];
var json_count = JSON.parse(fs.readFileSync("./fr.json", "utf-8")).length;

for (let i = 0; i < json_count; i++) {
    let current_data = new Object();
    current_data.id_pokemon = i+1;
    let name = new Object();
    for (let j = 0; j < all_language.length; j++) {
        let namelang = JSON.parse(fs.readFileSync("./"+all_language[j]+".json", "utf-8"))[i];
        name[all_language[j]] = namelang;
    }
    current_data.name = name;

    if (i+1 >= 1 && i+1 <= 151){
        current_data.generation = 1;
    }
    if (i+1 >= 152 && i+1 <= 251){
        current_data.generation = 2;
    }
    if (i+1 >= 252 && i+1 <= 386){
        current_data.generation = 3;
    }
    if (i+1 >= 387 && i+1 <= 493){
        current_data.generation = 4;
    }
    if (i+1 >= 494 && i+1 <= 649){
        current_data.generation = 5;
    }
    if (i+1 >= 650 && i+1 <= 721){
        current_data.generation = 6;
    }
    if (i+1 >= 722 && i+1 <= 890){
        current_data.generation = 7;
    }

    if (i+1 >= 810){
        current_data.enable = false;
    }
    else {
        current_data.enable = true;
    }

    all_data.push(current_data);
}

fs.writeFile('all_data.json', JSON.stringify(all_data), 'utf8', callback);

function callback(evt) {
    if (evt !== null){
        console.log(evt);
    }
    else {
        console.log("File created !!!!")
    }
}