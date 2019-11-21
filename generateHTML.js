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
    });
}

function generateHTML(getData) {
    return `<!DOCTYPE html>
    <html>
        <head>
            <title>test</title>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="generateHTML.js"></script>
        </head>
    
        <body>
    
            <image id="profilePic" src="${getData.profilePic}" alt="profilePic of me"></image>
    
        </body>
    </html>`
}

module.exports = {
    readColorFile: readColorFile,
    readUserinfoFile: readUserinfoFile,
    generateHTML: generateHTML
}


