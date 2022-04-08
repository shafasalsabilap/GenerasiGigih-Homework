import { useSelector, useDispatch } from "react-redux"
import { user_id } from "../Data/redux/userSlice"
import { userDisplayName } from "../Data/redux/userSlice"
import axios from "axios"

const Profile = () => {
    const accessToken = useSelector((state) => state.accessToken.value)
    const displayName = useSelector((state) => state.user.value.displayName)
    const dispatch = useDispatch();

    const fetchUserData = async () => {
        const data = await axios
            .get(
                `https://api.spotify.com/v1/me?access_token=${accessToken}`
            )
            .catch((error) => error)
        dispatch(user_id(data.data.id))
        dispatch(userDisplayName(data.data.display_name))
    }

    return (
        <div className="profile">
            {displayName !== undefined ? 
            <p>Logged in as: {displayName}</p> : 
            <button onClick={fetchUserData} className="selectButton">get Users Data</button>}
        </div>
    )
}

export default Profile;