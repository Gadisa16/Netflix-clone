import React from 'react'
import "./footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className="footer">
      <div className="mat-icons">
        <FacebookOutlinedIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>

      <div className="FooterMainDiv">
        <div className="div1">
          <ul>
            <li>Audio Description</li>
            <li>Inverse Relations</li>
            <li>Legal Notice</li>
            <li>Service Code</li>
            <li>&copy; 1997-2024 Netflix, Inc.</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>cookie Preferences</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer