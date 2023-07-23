import { IMG_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, area, costForTwo, avgRating } = props.resData.data;

    return (
        <div className="h-fit rounded overflow-hidden bg-white">
            <img className="w-fit object-cover object-center" src={IMG_URL + cloudinaryImageId} alt="Food Image" />
            <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm mb-2">Cuisines: {cuisines.join(", ")}</p>
                <p className="text-gray-700 text-sm mb-2">Address: {area}</p>
                <p className="text-gray-700 text-sm mb-2">Rs. {costForTwo / 100}</p>
                {
                    <div className={`${(avgRating > 3.9 ? "bg-green-600" : "bg-orange-500-600")} inline-flex items-center rounded p-1`}>
                        <svg className="w-4 h-4 fill-current text-white mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 1L12.39 6.36L18.18 7.27L13.96 11.18L15.09 16.14L10 13.77L4.91 16.14L6.04 11.18L1.82 7.27L7.61 6.36L10 1Z" />
                        </svg>
                        <p className="text-white text-sm font-bold">{avgRating}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default RestaurantCard;