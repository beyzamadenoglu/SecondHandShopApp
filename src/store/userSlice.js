import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


//burada stateleri tutuyoruz
const initialState = {
    user: {},
    token: null,
    loading: false,
    isAuth: false,
    error: '',
    message: ''
}

export const login = createAsyncThunk(
    'user/login',
    async () => {
       
    }
)

//statelerle değiştirmek istediğimiz dataları tutuyoruz
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userChange(state, action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.mail = action.payload.mail;
            state.isAuth =  true;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(login.pending)
    }

})

export default userSlice.reducer;
export const { userChange } = userSlice.actions;