import twitterLogo from "../assets/twitter-icon.png";
import facebookLogo from "../assets/facebook-icon.png";
import instagramLogo from "../assets/instagram-icon.png";
import githubLogo from "../assets/github-icon.png";

function Footer() {
  return (
    <>
      <section className="footer-section">
        <img src={twitterLogo} alt="" />
        <img src={facebookLogo} alt="" />
        <img src={instagramLogo} alt="" />
        <img src={githubLogo} alt="" />
      </section>
    </>
  );
}

export default Footer;
