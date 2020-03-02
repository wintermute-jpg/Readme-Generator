//required packages
var inquirer = require("inquirer");
var axios = require("axios");


//Username Prompt
inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
    },
    //axios call using User name 
]).then(response =>{
    axios.get("https://api.github.com/search/users?q="+ response.username)
    .then(response => {
        const Data = (response.data.items);
        //console.log(Data);
        const avatar = Data.map(item => item.avatar_url);
        console.log(avatar);
    }).then(
        inquirer.prompt([
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title",
            },
            {
                type: "input",
                message: "How would you describe your project?",
                name: "description",
            },
            //Table of Contents needs specific formatting
            {
    
            },
            //Installation Instructions 
            {
                type: "input",
                message: "How do you install your project?",
                name: "install",
            },
            //Usage documentation
            {
                type: "input",
                message: "Please ID the Usage for your project",
                name: "usage",
            },
            //Lisence
            {

            },
        ])
    );
});




//To Do:
//fill in the rest of the prompts 
//create patchwork ReadMe format that can be filled in with prompt answers.
