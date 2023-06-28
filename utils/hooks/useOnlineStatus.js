import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // check if offline;
    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, [])

    // return boolean;
    return onlineStatus;
}
export default useOnlineStatus;