import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const fullNameNFC = config.developer.fullName.normalize("NFC");
  const nameParts = fullNameNFC.split(" ");
  const firstName = nameParts[0] || config.developer.name.normalize("NFC");
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase().normalize("NFC")}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase().normalize("NFC")}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>An</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Full-Stack Developer</div>
            </h2>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img src="/images/mihi.png" alt="Phan Minh Hiếu" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
