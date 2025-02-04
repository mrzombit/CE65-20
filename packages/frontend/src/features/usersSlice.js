import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const CREATE_URL = "http://localhost:5000/user/signup"
const LOGIN_URL = "http://localhost:5000/auth/auth/login"
const FETCH_URL = "http://localhost:5000/user/username"
const UPDATE_URL = "http://localhost:5000/user/update?username"
const DELETE_URL = "http://localhost:5000/user/delete?userID="


// user : {
//     _id: "",
//     name: "",
//     surname: "",
//     username: "",
//     email: "",
//     phone_number: "",
//     password: "",
//     payment_cards: [],
//     subscription_plan_id: "",
//     project_ids: [],
//     is_cooperation: false,
//     transaction_ids: [],
// }
const initialState = {
    auth: {
        isLoggedIn: false,
        username: "",
        token: "",
        timeOut: "",
    },
    user: {
       
    },
    status: 'idle',
    error: null
}

// export const fetchUserByUsername = createAsyncThunk(
//     'users/fetchUserByUsername',
//     async (data) => {
//         const response = await axios.get(`${FETCH_URL}`, {
//             headers: {
//                 'Authorization': `token ${data.token}`
//                 // 'Authorization': `Bearer ${data.token}`
//             }
//         })
//         return response.data
//     }
// )

export const fetchUserByUsername = createAsyncThunk(
    'users/fetchUserByUsername',
    async (data) => {
        const config = {
            params: { username: data.username },
            headers: { Authorization: `Bearer ${data.token}` }
          };
        const response = await axios.get(`${FETCH_URL}`, config)
        return response.data
    }
)

export const addNewUser = createAsyncThunk(
    'users/addNewUser',
    async (data) => {
        const response = await axios.post(CREATE_URL, data)
        return response.data
    }
)

export const deleteUserById = createAsyncThunk(
    'users/deleteUserById',
    async (id) => {
        const response = await axios.delete(`${DELETE_URL}${id}`)
        return response.data
    }
)

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (data) => {
        const response = await axios.put(`${UPDATE_URL}${data.id}`, data.data)
        return response.data
    }
)

export const getToken = createAsyncThunk(
    'users/getToken',
    async (data) => {
        const response = await axios.post(`${LOGIN_URL}`, data)
        return response.data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setAuthUsername(state, action) {
            state.auth.username = action.payload
        },
        userUpdated(state, action) {
            state.selectedUser = action.payload
        },
        loggedOut(state, action) {
            state = initialState
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getToken.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.auth.isLoggedIn = true
                state.auth.token = action.payload.access_token
            })
            .addCase(getToken.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchUserByUsername.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUserByUsername.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(fetchUserByUsername.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })
            .addCase(addNewUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload.user
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = 'succeeded'
                state.error = action.error.message

            })
            .addCase(deleteUserById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = ''
            })
    },

})

export const { userUpdated, setAuthUsername, loggedOut } = usersSlice.actions

export default usersSlice.reducer

export const selectAllUsers = (state) => state.users.users