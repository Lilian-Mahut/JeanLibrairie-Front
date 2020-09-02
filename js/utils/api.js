import axios from "axios"
// import { serverConfig } from "../../../config/server.json"
// const PORT = serverConfig.PORT

const instance = axios.create({
    baseURL: "http://localhost:5000/"
})

export const addAuth = token => {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export default instance
