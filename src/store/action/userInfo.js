export const USERINFO = 'userinfo'

export const getUserInfo = (value) => {
    console.log(value);
    return (dispatch) => {
        const data = { abc: 123, cde: 3333 }
        const action = {
            type: USERINFO,
            value: data
        }
        dispatch(action)
    }
}