import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "../components/Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  const { name } = resInfo?.cards[0]?.card?.card?.info;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>

      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;

// ***************************************************8
// import { useState, useEffect } from "react";
// import Shimmer from "../components/Shimmer";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {

//       const data = await fetch(
//         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&catalog_qa=undefined&submitAction=ENTER"
//       );
//       const json = await data.json();
//       console.log(json);
//       setResInfo(json.data);

//   };

//   // Check if resInfo is defined before destructure
// const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

//   return resInfo === null ? (
//     <Shimmer />
//   ) : (
//     <div className="menu">
//       <h1>{name}</h1>
//       <h1>{cuisines}</h1>
//       <h1>{costForTwoMessage}</h1>

//       <ul>
//         <li>Biryani</li>
//         <li>Burger</li>
//         <li>Diet Coke</li>
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;
