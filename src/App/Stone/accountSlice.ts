import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../API/Agent";
import { Login, Register } from "../Model/Account";
import {Role} from "../Model/Account"

interface AccountState{
    roles: Role[] | null;
}

const initialState : AccountState= {
    roles: null
}
export const loginAccount = createAsyncThunk<any, Login>(
    'account/login',
    async (data, thunkAPI) => {
        try {
            let formData = new FormData();
            formData.append("Email", data.email);
            formData.append("Password", data.password);
            const result = await agent.Account.login(formData);
            console.log(result);
            return result;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);

export const registerAccount = createAsyncThunk<any, any>(
    'account/register',
    async (data, thunkAPI) => {
        try {
            let formData = new FormData();
            formData.append("Name", data.name);
            formData.append("Email", data.email);
            formData.append("Password", data.password);
            formData.append("Tell", data.tell.toString());
            formData.append("FormFiles", data.formflie);
            formData.append("RoleID", "1");
            // formData.append("RoleID", data.roleID.toString());
            const result = await agent.Account.register(formData);
            console.log(result);
            return result;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);


export const roleAccount = createAsyncThunk(
    'account/roleAccount',
    async (_, thunkAPI) => {
        try {
            const {data} = await agent.ListRole.roles();
            console.log(data);
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);

export const accountSlice = createSlice({
    name: "account" ,
    initialState ,
    reducers:{
       
    },
    extraReducers: (builder => {
        builder.addCase(roleAccount.fulfilled, (state, action) => {
            state.roles = action.payload
        });
    })
    
});

export const {} = accountSlice.actions




