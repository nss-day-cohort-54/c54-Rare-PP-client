import { fetchIt } from "../utils/Fetch"
import { Settings } from "../utils/Settings"

// get all users fetch
export const getAllUsers = () => {
    return fetchIt(`${Settings.API}/users`)
}