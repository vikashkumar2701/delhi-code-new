import "./styles.css";
import logo from "./imgs/logo.png";
import heroimage from "./imgs/Hero Image.png";
import slack from "./logos/slack.png";
import prudential from "./logos/Prudential.png";
import Microsoft from "./logos/Microsoft.png";
import zooveer from "./logos/Zoover.png";
export default function App() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="menus">
          <span>Services</span>
          <span>Resources</span>
          <span>Company</span>
          <span>Blog</span>
          <span>Contact Us</span>
          <span className="circularbtn">Let's talk</span>
        </div>
      </div>
      <div className="banner">
        <div className="text">
          <div className="notify">
            Best business platform - World record 2021
          </div>

          <div className="slogan">
            Support small business and join the nationwide movement to encourage
            commercial suppport for the millions of minority owned business
            helping world economy.
          </div>

          <div className="buttons">
            <button className="red">Get Started</button>
            <button className="youtube"> Watch Video</button>
          </div>
        </div>

        <div className="image">
          <img src={heroimage} />
        </div>
      </div>

      <div className="sponsors">
        <div>
          <img src={slack} />
        </div>
        <div>
          <img src={prudential} />
        </div>
        <div>
          <img src={Microsoft} />
        </div>
        <div>
          <img src={zooveer} />
        </div>
        <div></div>
      </div>
    </>
  );
}
