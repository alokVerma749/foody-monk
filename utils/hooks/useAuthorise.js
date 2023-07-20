import axios from "axios";
import { URL } from "../../utils/constants"
const useAuthorise = async () => {
    try {
        const response = await axios.get(URL + 'checkout', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        });
        if (response.data.success) {
            return {
                isLoggedIn: true,
                name: response.data.name,
                email: response.data.email,
                address: response.data.address,
            }
        } else {
            return {
                isLoggedIn: false,
                name: "",
                email: "",
                address: "",
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export default useAuthorise;