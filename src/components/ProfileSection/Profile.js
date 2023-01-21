import "./Profile.css";
const Profile = () => {
  return (
    <>
   <div className="Card">
        <div className="Card_background_img"></div>
        <div className="Card_profile_img"></div>
        <div className="User_details">
            <h3>Arun Ramsay</h3>
            <p>@arun || Programmer</p>
        </div>
        <div className="Card_count">
            <div className="Count">
                <div className="Followers">
                    <h3>1000</h3>
                    <p>Followers</p>
                </div>
                <div className="Following">
                    <h3>202</h3>
                    <p>Followings</p>
                </div>
                <div className="Post">
                    <h3>552</h3>
                    <p>Posts</p>
                </div>
            </div>
             <div className="Btn">Follow</div>
        </div>
    </div>
    </>
  );
};
export default Profile;
