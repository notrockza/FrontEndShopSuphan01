import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../API/Agent";
import { Product } from "../Model/Product";

interface ProductState{
    products: Product[] | null;
    productsLoaded : boolean
}

const initialState : ProductState= {
    products: null,
    productsLoaded: false

}



export const GetProduct = createAsyncThunk<Product[]>(
    'product/GetProduct',
    async (_, thunkAPI) => {
        try {
            const {data} = await agent.Product.getproducts();
            console.log(data);
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);

export const GetProductDetail = createAsyncThunk<Product, number>(
    'product/GetProductDetail',
    async (id, thunkAPI) => {
        try {
            return await agent.Product.details(id);
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data }) //ส่งไปที่ Interceptor
        }
    }
)




export const productSlice = createSlice({
    name: "product" ,
    initialState ,
    reducers:{
       
    },
    extraReducers: (builder => {
        builder.addCase(GetProduct.fulfilled, (state, action) => {
            state.products = action.payload
            state.productsLoaded = true
        });
    })
    
});

export const {} = productSlice.actions




