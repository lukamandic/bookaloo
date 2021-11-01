import { createSlice } from '@reduxjs/toolkit'

const authorSlice = createSlice({
  name: 'authorSlice',
  initialState: {
      author: {},
      authors: [],
      hasErrors: false,
      loading: false
  },
  reducers: {
    fetchAuthor: (state, action) => {
        
        state.author = action.payload.data

    },
    fetchAuthors: (state, action) => {

        //state.authors.push(action.payload)

    }
  },
})

export const { fetchAuthor, fetchAuthors } = authorSlice.actions

export default authorSlice.reducer