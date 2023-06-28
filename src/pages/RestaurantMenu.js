import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../../utils/hooks/useRestaurantMenu";

import { MENU_IMG_URL } from "../../utils/constants";
import { IMG_URL } from "../../utils/constants";
import Shimmer from "../components/Shimeer";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const { name, city, locality, cuisines, avgRating, costForTwo, totalRatingsString, cloudinaryImageId } = resInfo ? resInfo?.cards[0]?.card?.card?.info : "nhi"
    const { itemCards } = resInfo ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card : "nhi"

    return resInfo === null ? <Shimmer /> : (
        <section>
            <div className="info p-2 flex flex-row ">
                <div className="image bg-cover bg-center w-fit border border-red-600">
                    <img src={IMG_URL + cloudinaryImageId} alt="restaurant_image" />
                </div>
                <div className="description border border-green-600 w-1/2 mx-10">
                    <h3 className='text-3xl font-medium text-red-800 flex justify-center m-4'>{name}</h3>
                    <p>{city}</p>
                    <p>{locality}</p>
                    <div className="ratings">
                        <p>{avgRating}</p>
                        <p>{totalRatingsString}</p>
                    </div>
                </div>
            </div>
            <div className="menu-items">
                <h3 className='text-3xl font-medium text-red-800 flex justify-center m-4'>Menu Items</h3>
                {
                    itemCards.map((menuItem) => {
                        return (
                            <li key={menuItem.card.info.id} className="list-none flex flex-row border border-red-500 w-1/2 justify-center mx-auto space-y-4 my-3 items-center ">
                                <div className="desc flex flex-col justify-center items-center mx-5 font-bold text-lg w-1/2">
                                    <p>{menuItem.card.info.name}</p>
                                    <p>Rs: {menuItem.card.info.price / 100}</p>
                                </div>
                                <div className="image w-40">
                                    <img src={MENU_IMG_URL + menuItem.card.info.imageId} alt="restaurant_image" />
                                </div>
                                <button type="button" className="mx-5 bg-green-600 text-white w-24 h-10 hover:animate-pulse ">Add</button>
                            </li>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default RestaurantMenu;