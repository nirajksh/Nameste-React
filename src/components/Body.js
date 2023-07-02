import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  // 8 restraunt list = > filtered  rest with "King"
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [restaurantAll, setRestaurantAll] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const res = await data.json();

    setRestaurantAll(res?.data?.cards[2]?.data?.data?.cards);
    setFilteredData(res?.data?.cards[2]?.data?.data?.cards);
    //console.log(res?.data?.cards[2]?.data?.data?.cards);
  }
  if (!restaurantAll) return null;

  

 

  return restaurantAll?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search your food..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          onClick={() => {
            const data = filterData(searchText, restaurantAll);
            setFilteredData(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restaurant-list">
      
       {filteredData?.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          );
        })}
      
      </div>
    </>
  );
};
export default Body;
