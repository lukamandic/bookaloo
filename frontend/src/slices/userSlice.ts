import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      accessToken: localStorage.getItem('accessToken'),
      refreshToken: localStorage.getItem('refreshToken'),
      role: '',
      loggedIn: false,
      hasErrors: false,
      loading: false
  },
  reducers: {
    loginRequest: (state) => { state.loading = true },
    loginUser: (state, action) => {
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.accessToken = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
        state.role = action.payload.role
        localStorage.setItem("firstName", action.payload.firstName)
        localStorage.setItem("lastName", action.payload.lastName)
        localStorage.setItem("accessToken", action.payload.accessToken)
        localStorage.setItem("refreshToken", action.payload.refreshToken)
        localStorage.setItem("role", action.payload.role)
        state.loggedIn = true
    },
    logoutUser: (state, action) => {

        localStorage.removeItem("firstName")
        localStorage.removeItem("lastName")
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("role")
        state.loggedIn = false

    },
    loginFailed: (state) => {
      state.loggedIn = false 
      state.hasErrors = false
    }
  },
})

export const { loginUser, logoutUser, loginRequest, loginFailed } = userSlice.actions

export default userSlice.reducer
