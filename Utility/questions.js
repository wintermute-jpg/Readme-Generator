const questions = [
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
        //Installation Instructions 
        {
            type: "input",
            message: "How do you install your project?",
            name: "install",
        },
        //Usage documentation
        {
            type: "input",
            message: "Please ID the Usage for your project.",
            name: "usage",
        },
        //Lisence
        {
            type: "list",
            message: "What kind of license are you using?",
            name: "lisence",
            choices: ["MIT", "Eclipse", "ISC", "SIL", "NA"],
        },
        //Contributing
        {
            type: "input",
            message: "Who contributed to this project?",
            name: "contributing"
        },
        //Tests
        {
            type: "input",
            message: "Describe the tests for your project.",
            name: "tests",
        }
        
    ];

module.exports = questions;
