const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');
const axios = require('axios');


const questions = [
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
        }
];


inquirer.prompt(questions).then(data => {

    fs.writeFile('color.json', JSON.stringify(data, null, '\t'), function(err) {
        if (err) throw err;
        console.log("success! created color file!");
    })

    const queryURL = `https://api.github.com/users/${data.username}`;
    // const axiosResponse = [];


    axios
        .get(queryURL)
        .then(function(response) {

            const userInfo = {
                bio: response.data.bio,
                username: response.data.login,
                location: response.data.location,
                profileURL: response.data.html_url,
                numRepos: response.data.public_repos,
                followers: response.data.followers,
                following: response.data.following
            }

            fs.writeFile('userInfo.json', JSON.stringify(userInfo, null, '\t'), function(err) {
                if (err) throw err;
                console.log('success! created color user info file!');
            })
        });


    generateHTML.readColorFile();
    

});

