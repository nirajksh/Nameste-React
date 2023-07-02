import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FETCH_MENU_URL } from '../Constant'
import { MENU } from '../Constant'

const RestaurantMenu = () => {
    const[restaurant,setRestaurant]=useState(null)

    const {resId} = useParams();

    useEffect(()=>{
        getRestaurantInfo();
    },[])
    const getRestaurantInfo= async ()=>{
        const data = await fetch(MENU+resId);
        const res= await data.json()
        console.log(res?.data)
        setRestaurant(res.data)

    }

  return (
    <div className='menu'>
        <div>
            {/* <h1>{restaurant.resId}</h1>
            <h2>{restaurant.name}</h2> */}
        </div>
    </div>
  )
}

export default RestaurantMenu