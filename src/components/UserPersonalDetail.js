import React from "react";
import { Link } from "react-router-dom";
import { ProfileBar } from "./ProfileBar";
import "./UserPersonalDetail.css";

function UserPersonalDetail() {
  return (
    <>
      <ProfileBar />
      <Link to="/myprofile">
        <div className="user-personal-wrapper">
          <div className="user-personal-heading">tell us about your self</div>
          <form className="user-personal-info">
            <div className="user-personal-maritial">
              <label>marital status</label>
              <select>
                <option>never married</option>
                <option>devorced</option>
                <option>mariied and separated</option>
                <option>vido</option>
              </select>
            </div>
            <div className="user-personal-religion">
              <label>resident/city/state/country</label>
              <input type="text" placeholder="chennai,tamilnadu,india" />
            </div>
            <div className="user-personal-diet">
              <label>deit</label>
              <select>
                <option>veg</option>
                <option>non-veg</option>
                <option>occasionaly</option>
                <option>veg and non-veg</option>
              </select>
            </div>
            <div className="user-personal-height">
              <label>height in feet</label>
              <input type="number" min="4.0" max="7.0" placeholder="5.3" />
            </div>
            <div className="user-personal-community">
              <label>sun community</label>
              <select>
                <option>vellalar</option>
                <option>nadar</option>
              </select>
            </div>
            <div className="user-personal-qualification">
              <label>highest qualifiaction</label>
              <select>
                <option>B.E</option>
                <option>B.Tech</option>
                <option>Bsc</option>
              </select>
            </div>
            <div className="user-personal-detail">
              <label>qualification in detail</label>
              <input type="text" placeholder="B.E mechanical engineer" />
            </div>
            <div className="user-personal-college">
              <label>college name</label>
              <input type="text" placeholder="enter your college name" />
            </div>
            <div className="user-personal-employment">
              <label>employment status</label>
              <select>
                <option>employed</option>
                <option>unemployed</option>
                <option>willing to work</option>
              </select>
            </div>
            <div className="user-personal-designation">
              <label>designation if any</label>
              <input type="text" placeholder="software engineer" />
            </div>
            <div className="user-personal-company">
              <label>company name if any</label>
              <input type="text" placeholder="enter your comapany name" />
            </div>
            <div className="user-personal-income">
              <label>your income per month/year</label>
              <input type="text" placeholder="5 to 6 lakh yearly" />
            </div>
            <div className="user-personal-about">
              <label>about your self</label>
              <textarea
                name="comment"
                placeholder="about your self"
                rows="5"
                cols="5"
              />
            </div>
            <div className="user-personal-profile">
              <label>upload your profile pic</label>
              <input type="file" />
            </div>
            <button className="user-personal-button" type="submit">
              conform your details
            </button>
          </form>
        </div>
      </Link>
    </>
  );
}

export default UserPersonalDetail;
