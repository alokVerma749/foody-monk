import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
// import { CARDS } from "../../utils/mockData";
import { RESTAURANT_API } from "../../utils/constants";
import Shimmer from "./Shimeer";


const ResaturantContainer = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
        setlistOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <>
            <button type="button" className='bg-lime-400 p-1 m-auto flex rounded-md text-white'
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (restaurant) => restaurant.data.avgRating >= 4
                    )
                    setlistOfRestaurants(filteredList);
                    console.log(listOfRestaurants);
                }}>
                Filter To Rated Restaurants
            </button>

            <div className="res-container flex flex-row flex-wrap">
                {
                    listOfRestaurants.map((card) => {
                        return (
                            < RestaurantCard key={card.data.id} resData={card} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default ResaturantContainer;