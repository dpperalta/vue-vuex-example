import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-2a848-default-rtdb.firebaseio.com'
})

export default journalApi