var inquirer = require("inquirer");
var axios = require("axios");


inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
    },
]).then(function(response){
    axios({
        url: "https://api.github.com/search/users?q="+ response.username, 
        method: "get",
    }).then(function(response){
        console.log(response);
    });
});

inquirer.prompt([
    {
        type: "input",
        message: "What is your projects title?",
        name: "title",
    },
    {
       type: "input",
       message: "Can you describe your project?",
       name: "Description", 
    },
    {
        type: "input",
        message: "What kind of license are you using?",
        name: "License",
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "Contributing",
    },
])


//To Do:
//figure out gitignore so that I can actually update the repo.
//figure out how to upload to github repo without computer begging for death
//correct github API notation so that the call works
//fill in the rest of the prompts 
//create patchwork ReadMe format that can be filled in with prompt answers.
