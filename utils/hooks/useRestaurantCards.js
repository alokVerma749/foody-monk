import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../constants";

const useRestaurantCards = (setListOfFilteredRestaurants) => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const data = await fetch(RESTAURANT_API);
            const json = await data.json();
            // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setListOfFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            throw new error("can't load the restuarants")
        }
    }
    return listOfRestaurants;
}

export default useRestaurantCards;