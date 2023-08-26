import React from "react";
class Alert extends React.Component {
    render() {
        return (
            <div className="absolute left-0 right-0 m-auto top-30 w-80 h-52 p-5 bg-slate-300">
                <p className="text-lg font-semibold text-red-500">
                    Our Backend Services are currently suspended. If you want to test the app please mail us we will resume our backend services.
                </p>
                <span className="text-blue-500 text-base font-medium">Email: alokverma749@gmail.com</span>
            </div>
        )
    }
}

export default Alert;