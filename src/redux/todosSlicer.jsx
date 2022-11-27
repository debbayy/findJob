import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import services from "./services";



export const listActivity = createAsyncThunk(
    "activity-groups?email=yoga%2B1%40skyshi.io",
    async (params, {
        rejectWithValue
    }) => {
        try {
            const response = await services.getList(/* params.IdUser, params.document */);
            console.log(response, "ini responsenya")
            return response;
        } catch (error) {
            rejectWithValue(error.response);
        }
    },
);

const initialState = {
    activity: []

};

const todosSlicer = createSlice({
    name: "todosSlicer",
    initialState: {
        ...initialState,
    },
    reducers: {
        setActivity: (state, action) => {
            state[action.payload.key] = action.payload.value;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(listActivity.fulfilled, (state, action) => {
            console.log(action.payload.data.data);
            if (action.payload !== undefined) {
                state.activity = action.payload.data.data;
            }
        });

    },
});

export const {
    setActivity

} = todosSlicer.actions;

export default todosSlicer.reducer;
