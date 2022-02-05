import React from "react";
import "./VerificationSection.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import ChatIcon from "@mui/icons-material/Chat";

function VerificationSection() {
  return (
    <div className="verification">
      <h2 className="verify-content">best feartures that we serve you</h2>
      <div className="verify-icons">
        <div className="verification-icon">
          <VerifiedIcon />
          <p>one of the best and 100% verified profiles</p>
        </div>
        <div className="verification-icon">
          <EnhancedEncryptionIcon />
          <p>secured accounts and payment gateway</p>
        </div>
        <div className="verification-icon">
          <ChatIcon />
          <p>easy communication and live chat for premium accounts</p>
        </div>
      </div>
    </div>
  );
}

export default VerificationSection;
