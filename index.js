const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "message",
            message: "Input your GitHub username: ",
            name: "username"
        },
        {
            name: "color",
            type: "list",
            message: "What color template would you link for the resume?",
            choices: ["green", "blue", "pink", "red"]
        },
    ]).then(function (answers) {
        const color = answers.color;
        const username = answers.username;
        console.log(username);
        console.log(color);

        const queryURL = `https://api.github.com/users/${username}`;

        // const appendFileAsync = util.promisify(fs.appendFile);
        // const readFileAsync = util.promisify(fs.readFile);

        axios
            .get(queryURL)
            .then(function (response) {

                const bio = response.data.bio;
                const profilePic = response.data.avatar_url;
                const username = response.data.login;
                const location = response.data.location;
                const profileURL = response.data.html_url;
                const numRepos = response.data.public_repos;
                const followers = response.data.followers;
                const following = response.data.following;


                const responseArray = [bio, profilePic, username, location, profileURL, numRepos, followers, following];


                fs.writeFile('gitResponse.txt', "" , function(err) {
                    if(err) {
                        return console.log(err);                        
                    }
                    console.log("File saved!");
                })
                
                for(var i = 0; i < responseArray.length; i++) {
                    fs.appendFileAsync('gitResponse.txt', responseArray[i] + "\n", function(err) {
                        if(err) {
                            console.log(err);
                        } else {
                            console.log("Appended!");
                        }
                    })
                }
            });
    })