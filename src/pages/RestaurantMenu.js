import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

import { MENU_API } from "../../utils/constants";
import { MENU_IMG_URL } from "../../utils/constants";
import { IMG_URL } from "../../utils/constants";
import Shimmer from "../components/Shimeer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    // fetch menu data
    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    const { name, city, locality, cuisines, avgRating, costForTwo, totalRatingsString, cloudinaryImageId } = resInfo ? resInfo?.cards[0]?.card?.card?.info : "nhi"
    const { itemCards } = resInfo ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card : "nhi"

    return resInfo === null ? <Shimmer /> : (
        <section>
            <h1>{name}</h1>
            <div className="image">
                <img src={IMG_URL + cloudinaryImageId} alt="restaurant_image" />
            </div>
            <p>{city}</p>
            <p>{locality}</p>
            <div className="ratings">
                <p>{avgRating}</p>
                <p>{totalRatingsString}</p>
            </div>

            <div className="menu-items">
                {
                    itemCards.map((menuItem) => {
                        return (
                            <li key={menuItem.card.info.id}>
                                <p>{menuItem.card.info.name}</p>
                                <div className="image">
                                    <img src={MENU_IMG_URL + menuItem.card.info.imageId} alt="restaurant_image" />
                                </div>
                                <p>Rs: {menuItem.card.info.price / 100}</p>
                            </li>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default RestaurantMenu;