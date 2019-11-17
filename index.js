const inquirer = require("inquirer");
const axios = require("axios");

inquirer
    .prompt(
        {
            type: "message",
            message: "Input your GitHub username: ",
            name: "username"
        }
    ).then(function({username}) {
        const queryURL = `https://api.github.com/users/${username}`;


        axios
            .get(queryURL)
            .then(function(response) {
                console.log(response);
                const bio = response.data.bio;
                const profilePic = response.data.avatar_url;
                console.log(bio);
                console.log(profilePic);
            });
    })