export const initialState = {
    loading: true,
    data: [],
    error: null
}

export function dataReducer(state, action) {
    switch (action.type) {
        case 'FETCH_INIT':
            console.log(`reducers\dataReducer.state : ${state}`)
            console.log(state)
            return { ...state, loading: true, error: null }
            break;
        case 'FETCH_SUCCESS':
            console.log(`reducers\dataReducer.data : ${state}`)
            console.log(state)
            return { loading: false, data: action.payload, error: null }
            break;
        case 'FETCH_ERROR':
            console.log(`reducers\dataReducer.data : ${state}`)
            console.log(state)
            return { loading: false, data: [], error: action.error }
            break;
        default:
            return state;
    }
}