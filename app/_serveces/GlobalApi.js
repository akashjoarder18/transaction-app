const {default:axios} = require("axios");

const GetAllUsers = () => axios.get('/api/users');
const GetTransactionSearch = (data) => axios.get('/api/transactions/search?',data)

export default{
    GetAllUsers,
    GetTransactionSearch
}


