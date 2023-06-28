import { IMG_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, area, costForTwo, avgRating } = props.resData.data;
    return (
        <div className="w-full h-96 flex flex-col justify-between" >
            <img src={IMG_URL + cloudinaryImageId} alt="res-img" />
            <p className="name">{name}</p>
            <p className="cuisines">{cuisines.join(", ")}</p>
            <p className="area">Address: {area}</p>
            <p className="costForTwo">Rs.{costForTwo / 100}</p>
            <p className="ratings">Ratings: {avgRating}</p>
        </div>
    )
}

export default RestaurantCard;