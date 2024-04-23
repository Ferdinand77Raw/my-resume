import React from 'react';
import profile_pic from '../assets/img/profile_pic2.jpeg';

function ProfilePic(){
    return(
        <div className="profile-picture" id='profile'>
            <img src={profile_pic} alt='my_pic' />
        </div>
    );
}

export default ProfilePic;