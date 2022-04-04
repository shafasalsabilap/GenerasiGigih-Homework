const Profile = ({ fetchUserData, user }) => {
    return (
        <div className="profile">
            <button onClick={fetchUserData}>User Spotify Profile</button>
            {user.user_id !== undefined && <h1>Username : {user.displayName}</h1>}
        </div>
    )
}

export default Profile;