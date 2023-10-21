import React from 'react';
import './footer.css';
import facebookIcon from '../../Assests/facebook-icon.png';
import instagramIcon from '../../Assests/instagram-icon.png';
import youtubeIcon from '../../Assests/youtube-icon.png';
import snapchatIcon from '../../Assests/snapchat-icon.png';
import linkedinIcon from '../../Assests/linkedin-icon.png';

const footer = () => {
  return (
    <div className="footer">
      <small>&copy; NEU Deals. All rights reserved.</small>
      <div className="social-media">
        <a href="https://www.facebook.com/">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/">
          <img src={youtubeIcon} alt="Youtube" />
        </a>
        <a href="https://www.snapchat.com/">
          <img src={snapchatIcon} alt="Snapchat" />
        </a>
        <a href="https://www.linkedin.com/">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default footer;