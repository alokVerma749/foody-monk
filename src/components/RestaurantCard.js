import { IMG_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, area, costForTwo, avgRating } = props.resData.data;
    return (
        <div className="card flex flex-col justify-between sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 h-96 rounded-md shadow-md shadow-green-300">
            <img src={IMG_URL + cloudinaryImageId} alt="res-img" />
            <p className="name">{name}</p>
            <p className="cuisines">{cuisines.join(", ")}</p>
            <p className="area">Address: {area}</p>
            <p className="costForTwo">Rs.{costForTwo / 100}</p>
            <p className="ratings">Ratings: {avgRating}</p>
            <button type="button" className='mx-auto border-none cursor-pointer outline-none bg-lime-500 p-1 px-2 m-3 rounded-lg text-white text-sm '>View</button>
        </div>
    )
}

export default RestaurantCard;