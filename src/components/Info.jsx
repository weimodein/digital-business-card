import profilePicture from "../assets/profile-picture.png";
import emailLogo from "../assets/email-icon.png";
import linkedinLogo from "../assets/linkedin-icon.png";

function Info() {
  return (
    <>
      <section className="info-section">
        <img
          className="profile-img"
          src={profilePicture}
          alt="Profile picture of Jhoren Tuazon"
        />
        <h1>Jhoren Tuazon</h1>
        <p>Fullstack Developer</p>
        <a href="#">jhorentuazon.com</a>
        <div className="info-btn">
          <a href="www.linkedin.com"></a>
          <button id="email-btn">
            <img src={emailLogo} alt="Email logo" />
            <span>Email</span>
          </button>
          <button id="linkedin-btn">
            <img src={linkedinLogo} alt="LinkedIn logo" />
            <span>LinkedIn</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Info;
