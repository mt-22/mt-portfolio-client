import axios from "axios"

export default axios.create({
    withCredentials: true
})

export const hostURL = "https://mt-portfolio-api.onrender.com/"
// export const hostURL = "http://localhost:5000/"