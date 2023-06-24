import { useState , useEffect } from "react"
import RestaurantCard from "./RestaurantCard"


const Body =()=>{
  const [restaurant,setRestaurant]= useState([])

 useEffect (()=>{
getRestaurents()
 },[])

async function getRestaurents (){
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
   const res =  await data .json()
   console.log(res)
   
}  

    return(
      <div className='restaurant-list'>
        {restaurentlist.map((restaurant)=>{
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
        })}

        
      </div>
    )
 }
  export default Body