const {default:axios} = require("axios");

const GetAllUsers = () => axios.get('/api/users');

export default{
    GetAllUsers
}


