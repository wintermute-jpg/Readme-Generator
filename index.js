//required packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const api = require("./Utility/apis");
const questions = require("./Utility/questions");
const createReadMe = require("./Utility/createReadMe");

//Username Prompt
inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
    },
    //axios call using User name 
]).then((response) =>{
    api
    .getUser(response.username)
    .then(({data}) => {
            console.log(data)
            if(data.login === response.username){
                //Call back generate question if valid user
                generateQ();
            }
        })
    });
   
    //generate questions if username is verified
    function generateQ() {
        console.log('Valid Username');
        inquirer.prompt(questions)
        .then((response) => {
            api
            .getUser(response.username)
            .then(({data}) => {
                //console.log(data);
                writeFile("ReadMe.md", createReadMe({...response, ...data}));
               
        }
    )}
        )}

    

    //write file function 
        function writeFile(name, content){
            fs.writeFileSync(path.join(process.cwd(), name), content);
        } 





//To Do:
//create patchwork ReadMe format that can be filled in with prompt answers.
