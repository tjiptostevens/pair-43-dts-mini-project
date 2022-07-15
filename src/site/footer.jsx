import React from 'react'
import '../assets/css/footer.css'

const Footer = () => {
  return (
    <>
      <div className="col footer">
        <div className="row footer-container">
          <div>
            <ul>
              <li>Audio and Subtitles</li>
              <li>Media Center</li>
              <li>Security</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Provision</li>
              <li>Legal Provisions</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
        </div>
        <div>
          <button className="footer-button">Service Code</button>
        </div>
        <div className="copyright">
          <small>&copy; 2022 Movies. All Right Reserved.</small>
        </div>
      </div>
    </>
  )
}

export default Footer
