import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../constants";

const useRestaurantCards = (setListOfFilteredRestaurants) => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setListOfFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    return listOfRestaurants;
}

export default useRestaurantCards;