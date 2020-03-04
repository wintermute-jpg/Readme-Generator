require('dotenv').config()
const axios = require("axios");

//object to store  API response data
const obj = {
    //function that requests the username
    getUser(username){
        return axios
        //checks CLIENT ID and SECRET ID 
        .get(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&${client_secret=process.env.CLIENT_SECRET}`)
        .catch(err => {
            console.log(`Incorrect username`);
            process.exit(1);
            return err;
        });
    }
};
module.exports = obj



