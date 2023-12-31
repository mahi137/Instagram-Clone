export const globalReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER': {
            return {
                ...state,
                user: action.payload.user
            }
        }
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        }
        case 'SET_IS_AUTHENTICATED': {
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated
            }
        }
        case 'SET_IS_ONBOARDED': {
            return {
                ...state,
                isOnboarded: action.payload.isOnboarded
            }
        }
        case 'SET_IS_UPLOAD_POST_MODAL_OPEN': {
            return {
                ...state,
                isOpen: action.payload.isOpen
            }
        }
        case 'SET_SHOW_RIGHTBAR': {
            return {
                ...state,
                showRightbar: action.payload.showRightbar
            }
        }
        default: {
            throw Error('unknown action: ' + action.type)
        }
    }
}