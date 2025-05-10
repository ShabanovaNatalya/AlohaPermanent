import { createSlice } from "@reduxjs/toolkit";
import { TServices } from "src/utils/types";

export interface servicesState {
  servicesList: TServices[] | [];
}

export const initialState: servicesState = {
  servicesList: [],
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: () => {},
  selectors: {
    getServicesList: (state) => state.servicesList,
  },
});

export const { getServicesList } = servicesSlice.selectors;
