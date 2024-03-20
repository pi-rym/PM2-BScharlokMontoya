const axios = require('axios')

module.exports = { 
    getFilms : async () => {
     try{
        const {data} = await axios("https://students-api.up.railway.app/movies")
        return data
        }catch(error){
            throw new Error(error);
        }       
    }
};
