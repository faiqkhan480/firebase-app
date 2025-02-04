const user = {
    // data : null,
    loading: true,
    post: [],
    user: '',
};

export default (state = user, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                loading: false,
            };
        case 'LOGOUT':
            return {
              ...state,
              loading: false,
        }

        case 'GET_DATA':
            return {
                ...state,
                post: [action.payload, ...state.post, ],
                loading: false,
            };
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
            }

        case 'DELETE':
            return {
                ...state,
                post: state.post.filter(i => i.key !== action.payload)
            }

        default:
            return state;
    }
};