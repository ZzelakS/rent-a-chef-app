import React, { useState, useMeme, useCallback, useContext } from 'react'
import { useDropzone } from "react-dropzone"


const UserProfileCard = () => {
  const [fileUrl, setFileUrl] = useState(null);
  return (
    <div className="account-container">
      <div className="account-info">
        <h1>Profile Settings</h1>
        <p>You can set your preferred display name, create your profile URL and manage other personal settings</p>
      </div>
      <div className="account-box">
        <div className="account-box-image">
          <input />
          <img src='' alt='account upload' width={150} height={150} className='account-box-img-img'/>
          <p className="account-img-para">Change Image</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfileCard