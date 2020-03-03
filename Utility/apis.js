require('dotenv').config()
const axios = require("axios");

//object to store  API response data
const obj = {
    //function that requests the username
    getUser(username){
        return axios
        //checks CLIENT ID and SECRET ID 
        .get(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&${client_secret=process.env.CLIENT_SECRET}`).catch(err => {
            console.log(`Incorrect username`);
            process.exit(1);
            return err;
        });

    }
};
//axios.get("https://api.github.com/search/users?q="+ response.username)
    //.then(response => {
      //  const Data = (response.data.items);
        //console.log(Data);
        //const avatar = Data.map(item => item.avatar_url);
        //console.log(avatar);
    //})

module.exports = obj



