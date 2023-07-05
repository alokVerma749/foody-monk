import { IMG_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, area, costForTwo, avgRating } = props.resData.data;
    return (
        <div className="h-fit flex flex-col gap-3">
            <img src={IMG_URL + cloudinaryImageId} alt="res-img" className="rounded-md" />
            <p className="name"><span className="font-semibold">Name:</span> {name}</p>
            <p className="cuisines"><span className="font-semibold">Cuisines:</span> {cuisines.join(", ")}</p>
            <p className="area"><span className="font-semibold">Address:</span> {area}</p>
            <p className="costForTwo"><span className="font-semibold">Rs.</span> {costForTwo / 100}</p>
            <p className="ratings"><span className="font-semibold">Ratings:</span> {avgRating}</p>
        </div>
    )
}

export default RestaurantCard;