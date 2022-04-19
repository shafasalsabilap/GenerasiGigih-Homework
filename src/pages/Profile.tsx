import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { setUserID, setUserName, setImgSrc } from "../data/redux/userSlice";
import { RootState } from "../data/store";
import { fetchUserAPI } from "../API/fetchUser";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Profile = () => {
    const accessToken = useAppSelector((state: any) => state.accessToken.value);
    const UserName = useAppSelector((state: RootState) => state.user.userName);
    const imgSrc = useAppSelector((state: RootState) => state.user.imgSrc);
    const dispatch = useAppDispatch();

    useEffect(() => {
        accessToken !== undefined && (
            fetchUserAPI(accessToken).then(res => {
                dispatch(setUserID(res.id));
                dispatch(setUserName(res.display_name));
                dispatch(setImgSrc(res.images[0].url));
            }));
    }, [accessToken, dispatch]);

    return (
        <div className="profile">
            <img className="img profile" src={imgSrc} alt={UserName} />
            <p><PersonOutlineIcon fontSize="large"/> Username : {UserName}</p>
        </div>
    )
}

export default Profile;