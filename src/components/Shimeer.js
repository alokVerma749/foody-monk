const Card = () => {
    return (
        <div className="card flex flex-col justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 h-96 animate-pulse">
            <div className="h-48 rounded-t bg-gray-300"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
                <div className="w-full h-6 rounded bg-gray-300"></div>
                <div className="w-full h-6 rounded bg-gray-300"></div>
                <div className="w-3/4 h-6 rounded bg-gray-300"></div>
            </div>
        </div>
    )
}

const HeroSection = () => {
    return (
        <section className="sm:flex-col md:flex-row md:p-10 hero lg:w-full h-fit sm:flex mx-auto items-center gap-5 px-4 sm:px-6 lg:px-8 bg-gray-200">
            {/* Left Part */}
            <div className="sm:w-full sm:mt-5 sm:mb-0 md:w-1/2 text-center md:text-left md:mb-0 bg-gray-100 rounded-lg animate-pulse p-5">
                <h1 className="text-5xl font-bold mb-6 w-2/4 p-6 bg-gray-300 rounded-lg animate-pulse"></h1>
                <p className="text-xl mb-2 w-3/4 p-3 bg-gray-300 animate-pulse rounded-lg "></p>
                <p className="text-xl mb-2 w-3/4 p-3 bg-gray-300 animate-pulse rounded-lg "></p>
                <p className="text-xl mb-12 w-3/4 p-3 bg-gray-300 animate-pulse rounded-lg "></p>
                <p className=" rounded-md animate-pulse w-1/4 p-5 bg-gray-300"></p>
            </div>

            {/* Right Part */}
            <div className="sm:w-full sm:h-48 md:w-1/2 md:h-80 text-center md:text-left md:mb-0 bg-gray-100 rounded-lg animate-pulse p-5 h-1/2"></div>
        </section>
    )
}

const Shimmer = () => {
    return (
        <div className="res-container">
            <HeroSection />
            <div className="flex flex-row flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Shimmer;