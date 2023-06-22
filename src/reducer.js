const defaultState = {
    dragMap: false,
    zoom: 0,
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_DRAGMAP":
            return {...state, dragMap: action.payload}
        case "ZOOM":
            return {...state, zoom: state.zoom + action.payload}
        default:
            return state
    }
}