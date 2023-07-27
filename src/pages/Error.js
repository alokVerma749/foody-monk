import { useRouteError } from "react-router-dom"
const Error = () => {
    const err = useRouteError();
    return (
        <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                        <span className="sr-only">{err.statusText}</span>{err.status}
                        404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">{err.statusText}</p>
                    <p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-indigo-600 text-gray-50">Back to homepage</a>
                    <p className="mt-4 mb-8 text-red-600">{err?.data}</p>
                </div>
            </div>
        </section>
    )
}

export default Error