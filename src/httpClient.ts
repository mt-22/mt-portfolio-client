import axios from "axios"

export default axios.create({
    withCredentials: true
})

export const hostURL = "https://web-production-f06d.up.railway.app/"