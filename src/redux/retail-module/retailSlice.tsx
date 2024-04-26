import { createSlice } from "@reduxjs/toolkit";
import { InitialServiceData, CRMSliceSchema } from "./retail";

export const initialState: CRMSliceSchema = {
  platform: {
    user: {
      add_LeadForm: {
        input: {
          name: "",
        },
        details: [],
      },
    },
  },
  crm: {
    user: InitialServiceData,
  },
};

export const CRMSlice = createSlice({
  name: "crm",
  initialState,
  reducers: {
    setAddLeadTrue: (state, action) => {
      state.crm.user.add.isFlag = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { setAddLeadTrue } = CRMSlice.actions;
export default CRMSlice.reducer;
