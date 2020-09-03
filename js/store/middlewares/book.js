import api from "../../utils/api"

export default store => next => action => {
    switch (action.type) {
        case "FETCH_BOOKS":
            fetchBooksHandler(store)
    }
}

const fetchBooksHandler = store => {
    store.dispatch({type: "TOGGLE_BOOKS_IS_LOADING"})
    api.get("/browsebooks")
        .then(response => {
            setTimeout( () => {
                store.dispatch({type: "SET_BOOKS", payload: response.data.payload.books})
                store.dispatch({type: "TOGGLE_BOOKS_IS_LOADING"})
            }, 2000)
        })
}
