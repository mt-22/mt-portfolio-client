import axios from "axios"

export default axios.create({
    withCredentials: true
})

// export const hostURL = "https://web-production-f06d.up.railway.app/"
// export const hostURL = "http://10.0.0.214:5000/"
export const hostURL = "https://mt-portfolio-api.onrender.com/"