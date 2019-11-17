const inquirer = require("inquirer");
const axios = require("axios");

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

        function getColor(answers) {
            const color = answers.color;
            return color;
        }
        const username = answers.username;
        console.log(username);
        console.log(color);

        const queryURL = `https://api.github.com/users/${username}`;



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
            });
    })