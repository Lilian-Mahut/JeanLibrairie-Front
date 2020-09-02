import axios from "axios"
import { PORT } from "../../../config/server.json"

const instance = axios.create({
    baseURL: `http://localhost:${PORT}/api/`
})

export const addAuth = token => {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export default instance
