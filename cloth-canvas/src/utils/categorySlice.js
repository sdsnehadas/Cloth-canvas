import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { categorData } from "./constants";


// Thunk to fetch data dynamically
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("./constants.js"); // Dynamically load file
  console.log("data file", response.json())
  return await response.json();
});

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    selectedcategory: categorData[0],
    showSubCategoryContent:false
  },
  reducers: {
    addSelectedCategory: (state, action) => {
      state.selectedcategory = action.payload;
    },
    swipeLeftcategory: (state) => {
      const currentcategoryIndex = categorData.findIndex(
        (item) => item.label === state.selectedcategory.label
      );
      if (currentcategoryIndex > 0) {
        state.selectedcategory = categorData[currentcategoryIndex - 1];
      } else return;
    },
    swipeRightcategory: (state) => {
      const currentcategoryIndex = categorData.findIndex(
        (item) => item.label === state.selectedcategory.label
      );
      if (currentcategoryIndex < categorData.length - 1) {
        state.selectedcategory = categorData[currentcategoryIndex + 1];
      } else return;
    },
    showSubCategories: (state) => {
      state.showSubCategoryContent = !state.showSubCategoryContent;
    },
  },
 
});

export const { addSelectedCategory, swipeLeftcategory, swipeRightcategory, showSubCategories } =
  categorySlice.actions;
export default categorySlice.reducer;
