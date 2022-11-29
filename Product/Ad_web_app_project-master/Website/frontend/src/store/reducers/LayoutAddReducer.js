
export const layoutAddReducer = (state = {isSuccess: false, isError: false, message: ""}, action) => {

    switch (action.type) {

        case "ADD_LAYOUT_SUCCESSFULLY":
            return {
                ...state,
                isSuccess: true
            }
        case "ADD_LAYOUT_FAIL":
            return {
                ...state,
                isError: true,
                message: action.payload
            }
        case "ADD_LAYOUT_RESET":
            return {
                isSuccess: false,
                isError: false,
                message: ""
            }
        default:
            return state
    }


}