import { createSlice } from "@reduxjs/toolkit";
import { TMasters } from "src/utils/types";

export interface mastersState {
  masters: TMasters[] | [];
}

export const initialState: mastersState = {
  masters: [],
};

export const mastersSlice = createSlice({
  name: "masters",
  initialState,
  reducers: {},
  extraReducers: () => {

  },
  selectors: {
    getMastersList: (state) => state.masters,
  },
});

export const { getMastersList } = mastersSlice.selectors;
