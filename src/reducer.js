const defaultState = {
    dragMap: false,
    zoom: 0,
}
const max_zoom = 10;
const min_zoom = 0;


export default function reducer(state = defaultState, action) {
    let new_zoom;
    switch (action.type) {
        case "SET_DRAGMAP":
            return {...state, dragMap: action.payload}
        case "ZOOM_IN":
            new_zoom = state.zoom + 1;
            if (new_zoom > max_zoom)
                return state
            return {...state, zoom: new_zoom}
        case "ZOOM_OUT":
            new_zoom = state.zoom - 1;
            if (new_zoom < min_zoom)
                return state
            return {...state, zoom: new_zoom}
        case "ZOOM_DEFAULT":
            return {...state, zoom: defaultState.zoom}
        default:
            return state
    }
}