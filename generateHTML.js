const fs = require('fs');

function readColorFile() {
    fs.readFile("color.json", "utf8", function(err, data) {
        if(err) throw err;
    
        const getData = JSON.parse(data);
    
        console.log(getData.color);
    })
}

function readUserinfoFile() {
    fs.readFile("userInfo.json", "utf8", function(err, data) {
        if(err) throw err;

        const getData = JSON.parse(data);

        console.log(getData);

        $("#profilePic").attr('src', getData.profilePic);
    })
}

module.exports = {
    readColorFile: readColorFile,
    readUserinfoFile: readUserinfoFile
}


