const {default:axios} = require("axios");

const GetAllUsers = () => axios.get('/api/users');
const GetTransactionSearch = (data) => axios.post('/api/transactions/search',data)
const DownloadTransactionSearch = (data) => axios.post('/api/transactions/download',data)
const DownlaadListHistory = () => axios.get('/api/transactions/download');
//const DownloadApi = (data) => axios.post('/api/transactions/home',data);

export default{
    GetAllUsers,
    GetTransactionSearch,
    DownloadTransactionSearch,
    DownlaadListHistory
}


