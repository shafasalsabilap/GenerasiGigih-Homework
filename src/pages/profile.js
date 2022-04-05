import { useSelector, useDispatch } from "react-redux"
import { user_id, userDisplayName } from "../redux/reducerslice"
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
            { displayName !== undefined ? 
            <h1>Username : {displayName} </h1> 
            :
            <button onClick={fetchUserData} className="" >User Spotify Profile</button>}
            </div>
        )
}

export default Profile;