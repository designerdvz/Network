const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const TOTAL_USER_COUNT = 'TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 7,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id!= action.userId)
            }

        default:
            return state;
    }
}


export const follow = (userId) => {
    return {
        type: FOLLOW, userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}
export const setUsers = (users) => ({
    type: SET_USERS, users
})
export const setTotalUserCount = (totalCount) => ({
    type: TOTAL_USER_COUNT, totalCount
})
export const changePage = (currentPage) => ({
    type: CHANGE_PAGE, currentPage
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})

export default usersReducer