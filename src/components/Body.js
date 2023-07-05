import ResaturantContainer from "./RestaurantContainer";

const Body = () => {
    return (
        <main>
            <h3 className='mt-4 mb-2 text-4xl tracking-tight font-bold text-center text-red-800'>Top Restaurants</h3>
            <hr className="w-[275] h-1 mx-auto bg-gray-400 border-0 rounded"></hr>
            <ResaturantContainer />
        </main>
    )
}


export default Body;