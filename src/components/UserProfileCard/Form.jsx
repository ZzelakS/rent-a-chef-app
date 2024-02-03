import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons-ti";
// import { Button }

const Form = () => {
  return (
    <div className="form">
      <div className="form-details">
        <form>
          <div className="form-box-input">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input1"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
