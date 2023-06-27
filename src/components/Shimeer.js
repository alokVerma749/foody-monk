const Card = () => {
    return (
        <div className="card flex flex-col justify-between sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 h-96 animate-pulse">
            <div className="h-48 rounded-t bg-gray-300"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
                <div className="w-full h-6 rounded bg-gray-300"></div>
                <div className="w-full h-6 rounded bg-gray-300"></div>
                <div className="w-3/4 h-6 rounded bg-gray-300"></div>
            </div>
        </div>
    )
}

const Shimmer = () => {
    return (
        <div className="res-container flex flex-row flex-wrap w">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
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
    )
}

export default Shimmer;