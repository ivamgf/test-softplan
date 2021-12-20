import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    name: function(state, action) {
        return []
    },
    description: function(state, action) {
        return []
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;
