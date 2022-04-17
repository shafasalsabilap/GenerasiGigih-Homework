import { useAppSelector } from "../Data/hooks"
import { useAppDispatch } from "../Data/hooks"
import { RootState } from "../Data/store"
import { fetchUser } from "../API-Call/fetchUser"
import { setUserID } from "../Data/redux/userSlice"
import { setUserDisplayName } from "../Data/redux/userSlice"
import { setImgSrc } from "../Data/redux/userSlice"
import { useEffect } from "react"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Profile = () => {
    const accessToken = useAppSelector((state: any) => state.accessToken.value);
    const userDisplayName = useAppSelector((state: RootState) => state.user.displayName);
    const imgSrc = useAppSelector((state: RootState) => state.user.imgSrc);
    const dispatch = useAppDispatch();

    useEffect(() => {
        accessToken !== undefined && (
            fetchUser(accessToken).then(res => {
                dispatch(setUserID(res.id));
                dispatch(setUserDisplayName(res.display_name));
                dispatch(setImgSrc(res.images[0].url));
            }));
    }, [accessToken, dispatch]);

    return (
        <div className="profile">
            <img className="img-profile" src={imgSrc} alt={userDisplayName} />
            <p> <PersonOutlineIcon fontSize="large"/>  Username : {userDisplayName}</p> {/*ADD ICON WITH MATERIAL UI LIBRARY */}
        </div>
    )
}

export default Profile;