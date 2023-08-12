import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import services from "./services";

export const userLogin = createAsyncThunk(
  "login",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await services.login(data);
      console.log(response);
      if (response.data === undefined) {
        return alert("Error", "User Tidak ditemukan!", "error");
      }

      console.log(response.data);

      localStorage.setItem("_token", response.data.data.token);
      return response;
    } catch (err) {
      const error = err;
      if (!error.response) {
        throw err;
      }
      return console.log(error.response.data);
    }
  }
);

export const getAllJobs = createAsyncThunk(
  "jobs",
  async (params, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("_token");
      const response = await services.getJobs(
        params.description,
        params.location,
        params.page,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

export const getDetailJob = createAsyncThunk(
  "job",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("_token");
      const response = await services.getJob(id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      return response;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const initialState = {
  activity: [],
  detail: {},
};

const slicer = createSlice({
  name: "slicer",
  initialState: {
    ...initialState,
  },
  reducers: {
    // setActivity: (state, action) => {
    //     state[action.payload.key] = action.payload.value;
    // },
    // setDataActivity: (state, action) => {
    //     state.postActivity[action.payload.key] = action.payload.value;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload !== undefined) {
        state.activity = action.payload.data.data.data;
      }
    });
    builder.addCase(getDetailJob.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.data !== undefined) {
        state.detail = action.payload.data.data.jobDetail;
      }
    });
  },
});

export const { setActivity, setDataActivity } = slicer.actions;

export default slicer.reducer;
