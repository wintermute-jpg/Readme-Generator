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
        //Table of Contents needs specific formatting
        //{

        //},
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
        //{

        //},
    ];

module.exports = questions;
