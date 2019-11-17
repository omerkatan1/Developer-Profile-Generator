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
                // console.log(response);
                const bio = response.data.bio;
                const profilePic = response.data.avatar_url;
                const username = response.data.login;
                const location = response.data.location;
                const profileURL = response.data.html_url;
                const numRepos = response.data.public_repos;
                const followers = response.data.followers;
                const following = response.data.following;
                console.log(bio);
                console.log(profilePic);
                console.log(username);
                console.log(location);
                console.log(profileURL);
                console.log(numRepos);
                console.log(followers);
                console.log(following);
            });
    })