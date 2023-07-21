import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../../utils/hooks/useRestaurantMenu";
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/cartSlice';

import { MENU_IMG_URL } from "../../utils/constants";
import { IMG_URL } from "../../utils/constants";
import Shimmer from "../components/Shimeer";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const dispatch = useDispatch();

    const addToCart = (menuItem) => {
        dispatch(addItem(menuItem));
    }

    const { name, city, locality, cuisines, avgRating, costForTwo, totalRatingsString, cloudinaryImageId } = resInfo ? resInfo?.cards[0]?.card?.card?.info : "null";

    let { itemCards } = resInfo ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card : "null";
    if (!itemCards) {
        itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
    }
    return resInfo === null ? <Shimmer /> : (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="info flex flex-row items-center">
                <div className="image w-32 h-32 bg-cover bg-center border border-red-600 rounded-full overflow-hidden">
                    <img src={IMG_URL + cloudinaryImageId} alt="restaurant_image" className="w-full h-full object-cover" />
                </div>
                <div className="description ml-6">
                    <h3 className="text-3xl font-medium text-red-800">{name}</h3>
                    <p className="text-gray-500">{city}</p>
                    <p className="text-gray-500">{locality}</p>
                    <div className="flex items-center mt-2">
                        <p className="text-red-600 font-semibold">{avgRating}</p>
                        <p className="text-gray-500 ml-2">{totalRatingsString}</p>
                    </div>
                </div>
            </div>
            <div className="menu-items mt-8">
                <h3 className="text-3xl font-medium text-red-800 mb-4">Menu Items</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {itemCards.map((menuItem) => (
                        <li key={menuItem.card.info.id} className="border border-red-500 rounded-lg overflow-hidden">
                            <div className="relative">
                                <img src={MENU_IMG_URL + menuItem.card.info.imageId} alt="restaurant_image" className="w-full h-48 object-cover" />
                                <button
                                    type="button"
                                    className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-lg focus:outline-none hover:bg-red-700"
                                    onClick={() => addToCart({
                                        menuItem: menuItem,
                                        name: name
                                    })}
                                >
                                    Add
                                </button>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-semibold text-red-800">{menuItem.card.info.name}</h4>
                                {
                                    (menuItem.card.info.price) ? <p className="text-gray-500">Rs: {menuItem.card.info.price / 100}</p> : <p className="text-gray-500">Rs: {menuItem.card.info.defaultPrice / 100}</p>
                                }

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default RestaurantMenu;