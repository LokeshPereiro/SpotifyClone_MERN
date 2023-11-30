import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__links">
        <div className="footer__links--ele">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
        </div>
        <div className="footer__links--ele">
          <h3>Communities</h3>
          <ul>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
        </div>
        <div className="footer__links--ele">
          <h3>Useful links</h3>
          <ul>
            <li>Support</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        <div className="footer__links--ele">
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
          <ul className="legacy">
            <li>Legal</li>
            <li>Privacy Center</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>About Ads</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
      <div className="footer__separator"></div>
      <div className="footer__last-ele">
        <h4>&reg; All rights reserved 2023 - Made with 💖</h4>
      </div>
    </div>
  );
};

export default Footer;
