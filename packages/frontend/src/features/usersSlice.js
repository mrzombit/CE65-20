import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const CREATE_URL = "http://localhost:5000/user/post/"
const FETCH_URL = "http://localhost:5000/user/users"
const UPDATE_URL = "http://localhost:5000/user/edit?userID="
const DELETE_URL = "http://localhost:5000/user/delete?userID="

const initialState = {
    users: [],
    selectedUser: {},
    status: 'idle',
    error: null
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await axios.get(`${FETCH_URL}`)
        return response.data
    })

export const fetchUserById = createAsyncThunk(
    'users/fetchUserById',
    async (id) => {
        const response = await axios.get(`${CREATE_URL}${id}`)
        return response.data
    })

export const addNewUser = createAsyncThunk(
    'users/addNewUser',
    async (data) => {
        const response = await axios.post(CREATE_URL, data)
        return response.data
    })

export const deleteUserById = createAsyncThunk(
    'users/deleteUserById',
    async (id) => {
        const response = await axios.delete(`${DELETE_URL}${id}`)
        return response.data
    })

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (data) => {
        const response = await axios.put(`${UPDATE_URL}${data.id}`, data.data)
        return response.data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userUpdated(state, action) {
            state.selectedUser = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchUserById.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.selectedUser = action.payload
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.users.push(action.payload.user)
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(deleteUserById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.users = state.users.filter(item => item._id !== action.payload.user._id)
            })
    },

})

export const { userUpdated } = usersSlice.actions

export default usersSlice.reducer

export const selectAllUsers = (state) => state.users.users