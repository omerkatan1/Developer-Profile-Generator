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
            .then(function(result) {
                console.log(result);
            });
    })