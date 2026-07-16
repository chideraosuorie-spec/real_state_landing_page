import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  houses: [
    {
      name: "Modern 3BHK Villa",
      id: "m3villa",
      img: "/images/modern.jpg",
      location: "Ajah Ikota",
      price: "# 400,000,000",
    },
    {
      name: "Luxury Apartment",
      id: "luxury",
      img: "/images/luxury.jpg",
      location: "Ikeja Lagos",
      price: "# 70,000,000",
    },
    {
      name: "Commercial building",
      id: "commercial",
      img: "/images/modern.jpg",
      location: "Alausa, Ikeja Lagos",
      price: "# 30,000,000",
    },
    {
      name: "Duplex",
      id: "duplex",
      img: "/images/commercial2.jpg",
      location: "Ikeja Lagos",
      price: "# 270,000,000",
    },
    {
      name: "sky Villa",
      id: "m3villa",
      img: "/images/luxury.jpg",
      location: "victoria Island",
      price: "# 450,000,000",
    },
    {
      name: "Mansion",
      id: "m3villa",
      img: "/images/house1.jpg",
      location: "victoria Island",
      price: "# 150,000,000",
    },
    {
      name: "apartment",
      id: "m3villa",
      img: "/images/villa3.jpg",
      location: "victoria Island",
      price: "# 200,000,000",
    },
    {
      name: "Duplex-2",
      id: "m3villa",
      img: "/images/vila.jpg",
      location: "victoria Island",
      price: "# 400,000,000",
    },
  ],
};
const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {},
});
export const SelectHouse = (state) => state.house.houses;
export default houseSlice.reducer;
