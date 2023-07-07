import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../Constant'
import Shimmer from './Shimmer'


const RestaurantMenu = () => {
   const[restaurant,setRestaurant]=useState(null)

    const {resId} = useParams({});

   
    

    useEffect(()=>{
        getRestaurantInfo();
    },[])
    const getRestaurantInfo= async ()=>{
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}&submitAction=ENTER`);
        const json= await data.json()
        console.log(json?.data?.cards[0]?.card?.card?.info?.name)
        setRestaurant(json?.data)
//resMenu?.cards[0]?.card?.card?.info?
    }

  return ! restaurant ?(<Shimmer/>):
  (
    <div className='menu'>
        <div>
          <h1>{resId}</h1>
          <h2> {restaurant?.cards[0]?.card?.card?.info?.name}</h2>
          <img src={IMG_CDN_URL+restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
         
          <h2>
            {restaurant?.cards[0]?.card?.card?.info?.areaName} ,{" "}
            {restaurant?.cards[0]?.card?.card?.info?.city}
          </h2>
        </div>
        
    </div>
  )
}

export default RestaurantMenu