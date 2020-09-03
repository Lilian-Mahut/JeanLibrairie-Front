export const setStorageToken = (token) => {
    return window.localStorage.setItem("token", token)
}

export const getStorageToken = () => {
    return window.localStorage.getItem("token")
}

export const clearToken = () => {
    window.localStorage.removeItem("token")
}
