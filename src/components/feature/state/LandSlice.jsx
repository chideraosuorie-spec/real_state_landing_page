import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lands: [
    {
      name: "Land1",
      id: "land-1",
      img: "/images/land1.jpg",
      location: "Ajah Ikota",
      price: "# 400,000,000",
    },
    {
      name: "Land2",
      id: "land-2",
      img: "/images/land2.jpg",
      location: "Ikeja Lagos",
      price: "# 70,000,000",
    },
    {
      name: "Land3",
      id: "land-3",
      img: "/images/land1.jpg",
      location: "Alausa, Ikeja Lagos",
      price: "# 30,000,000",
    },
    {
      name: "Land4",
      id: "land-4",
      img: "/images/land4.jpg",
      location: "Ikeja Lagos",
      price: "# 270,000,000",
    },
    {
      name: "Land5",
      id: "land-5",
      img: "/images/land5.jpg",
      location: "victoria Island",
      price: "# 450,000,000",
    },
    {
      name: "Land6",
      id: "land-6",
      img: "/images/land6.jpg",
      location: "victoria Island",
      price: "# 150,000,000",
    },
    {
      name: "Land7",
      id: "land-7",
      img: "/images/land7.jpg",
      location: "victoria Island",
      price: "# 200,000,000",
    },
    {
      name: "Land8",
      id: "land8np",
      img: "/images/land8.jpg",
      location: "victoria Island",
      price: "# 400,000,000",
    },
  ],
};
const landSlice = createSlice({
  name: "land",
  initialState,
  reducers: {},
});
export const SelectLand = (state) => state.land.lands;
export default landSlice.reducer;
