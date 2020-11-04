import { USERINFO } from "../action/userInfo"

const defaultState = {
    inputValue: 123,
    data: {}
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case USERINFO:
            newState.data = action.value
            return newState
    }
    return state
}