import React from "react";
import { Link } from "react-router-dom";
import "./PartnerInfo.css";
import { ProfileBar } from "./ProfileBar";

function PartenerInfo() {
  return (
    <>
      <ProfileBar />
      <Link to="/mypreference">
        <div className="partner-detail-wrapper">
          <div className="partner-heading">
            tell us about your partner preference
          </div>

          <form className="partner-info">
            <div className="partner-age">
              <label>age</label>
              <input type="number" min="18" max="50" placeholder="18" />
              <lablel>to</lablel>
              <input type="number" min="20" max="50" placeholder="18" />
            </div>
            <div className="partner-height">
              <label>height in feet</label>
              <input type="number" min="5.0" max="7.0" placeholder="5.5" />
              <lablel>to</lablel>
              <input type="number" min="5.0" max="7.0" placeholder="6.0" />
            </div>
            <div className="partner-maritial-status">
              <label>marital status</label>
              <select>
                <option>never married</option>
                <option>devorced</option>
                <option>mariied and separated</option>
                <option>vido</option>
              </select>
            </div>
            <div className="partner-religion">
              <label>religion</label>
              <select name="partner-religion">
                <option>hindu</option>
                <option>muslim</option>
                <option>christian</option>
              </select>
            </div>
            <div className="partner-community">
              <label>community</label>
              <select name="partner-caste">
                <option>nadar</option>
                <option>iyer</option>
                <option>devar</option>
              </select>
            </div>
            <div className="partner-location">
              <label>location details</label>
              <select name="partner-nationality">
                <option>country</option>
                <option>india</option>
                <option>usa</option>
                <option>london</option>
              </select>
              <select name="partner-satate">
                <option>state</option>
                <option>kerala</option>
                <option>tamilnadu</option>
                <option>karnadaka</option>
              </select>
              <select name="partner-city">
                <option>city</option>
                <option>ooty</option>
                <option>kodaikanal</option>
                <option>dindigul</option>
              </select>
            </div>
            <div className="partner-education">
              <label>educational details</label>
              <select>
                <option>B.E</option>
                <option>B.Tech</option>
                <option>Bsc</option>
              </select>
            </div>
            <div className="partner-occupation">
              <label>occupation</label>
              <select>
                <option>banking</option>
                <option>doctor</option>
                <option>software engineer</option>
              </select>
            </div>
            <div className="partner-income">
              <label>income per month/year</label>
              <input type="text" placeholder="5 to 6 lakh yearly" />
            </div>
            <div className="partner-diet">
              <label>deit</label>
              <select>
                <option>veg</option>
                <option>non-veg</option>
                <option>occasionaly</option>
                <option>veg and non-veg</option>
              </select>
            </div>
            <button type="submit" className="partner-button">
              conform your details
            </button>
          </form>
        </div>
      </Link>
    </>
  );
}

export default PartenerInfo;
