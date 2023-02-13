import React, { useState } from "react";
import Popup from "../popup";

function Home() {
    const [status, setStatus] = useState(null);
  
  return (
    <>
      <div style={{ position: "absolute" }}>
        <header>
          <span className="line1" />
          <span className="line2" />
          <span className="back">Back</span>
          <div className="name">
            <img src="./assets/image/Ellipse.png" alt="" />
            <div>
              <span className="user">Pattie Trusdale</span>
              <br />
              <span className="dev">Full-stack Developer</span>
            </div>
          </div>
          <button className="hire">HIRE</button>
        </header>
        <div className="name1">
          <img src="./assets/image/Ellipse.png" alt="" />
          <div>
            <span className="user">Pattie Trusdale</span>
            <br />
            <span className="dev">Full-stack Developer</span>
          </div>
        </div>
        <section>
          <div className="main-title">
            Gembucket
            <div className="pen" onClick={() => setStatus("Project")}>
              <img src="./assets/image/Vector.png" alt="" />
            </div>
          </div>
          <div className="category">
            <span>#solar_breeze</span>
            <span>#red_hold</span>
            <span>#card_guard</span>
            <span>#lotstring</span>
            <span>#tough_joy_fax</span>
            <span>#cardify</span>
          </div>
          <p className="main-content">
            Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus
            aliquet at neque aenean auctor gravida sem praesent id massa id nisl
            venenatis lacinia aenean sit amet justo morbi ut odio feugiat non
            pretium quis lectus suspendisse.
          </p>
          <p className="main-content">
            Official site:
            <span style={{ color: "#18c4ee" }}> https://gembucket.com</span>
          </p>
          <img
            src="./assets/image/Rectangle.png"
            style={{ width: "100%" }}
            alt=""
          />
          <div className="description">
            <div className="title">
              Description
              <div className="pen" onClick={() => setStatus("Description")}>
                <img src="./assets/image/Vector.png" alt="" />
              </div>
            </div>
            <ul>
              <li>
                Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem
                integer tincidunt ante vel nasand praesent blandit lacinia erat
                vestibulum sed.
              </li>
              <li>
                Augue vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere.
              </li>
              <li>Liam neque vestibulum eget vulputate ut ultrices vel.</li>
            </ul>
          </div>
          <div className="features">
            <div className="title">
              Features
              <div className="pen" onClick={() => setStatus("Features")}>
                <img src="./assets/image/Vector.png" alt="" />
              </div>
            </div>
            <div className="features-card">
              <div className="features-content1">
                <p>User research</p>
              </div>
              <img src="./assets/image/Rectangle 2.png" alt="" />
              <div className="features-content">
                <p>User research</p>
                <p>
                  Metus vitae durea nullam ipsum aliquam non mauris morbi non
                  lectus aliquam sit amet aliquam dieam earn magna bibendum
                  imperdiet nullam orci pede.
                </p>
              </div>
            </div>
            <div className="features-card end">
              <div className="features-content1">
                <p>Getting stakeholder</p>
              </div>
              <img src="./assets/image/Rectangle 2.1.png" alt="" />
              <div className="features-content">
                <p className="p1">Getting stakeholder</p>
                <p className="p2" style={{padding: "0px 300px 0px 80px"}}>
                  Ipsum ac tellus semper interdum mauris libero ullamcorper
                  purus sit amet nulla quisque arcu libero rustrum sempereed ac
                  lobortis vel dapibus at.
                </p>
              </div>
            </div>
            <div className="features-card">
              <div className="features-content1">
                <p>User interaction</p>
              </div>
              <img src="./assets/image/Rectangle 2(4).png" alt="" />
              <div className="features-content">
                <p>User interaction</p>
                <p>
                  Sollicitudin vitae consectetuer eget rutrum at lorem integer
                  tincidunt anteca veal ipsum praesent blandit lacinia erat
                  vestibulum sed at magna.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="title">Team-members</div>
            <div className="team">
              <div className="team-card">
                <img src="./assets/image/Rectangle 2(5).png" alt="" />
                <span className="team-card1">Antons Playden</span>
                <span className="team-card2">Dental Hygienist</span>
              </div>
              <div className="team-card">
                <img src="./assets/image/Rectangle 2(6).png" alt="" />
                <span className="team-card1">Lowe Coronas</span>
                <span className="team-card2">Financial Analyst</span>
              </div>
            </div>
            <div className="team">
              <div className="team-card">
                <img src="./assets/image/Rectangle 2(3).png" alt="" />
                <span className="team-card1">Galvan Bonifas</span>
                <span className="team-card2">Media Manager</span>
              </div>
              <div className="team-card">
                <img src="./assets/image/Rectangle 2(2).png" alt="" />
                <span className="team-card1">Galvan Bonifas</span>
                <span className="team-card2">Media Manager</span>
              </div>
            </div>
          </div>
          <div>
            <div className="title">Want to know more, contact me!</div>
            <div className="concact">
              <div className="concact1">
                <div className="concact-info">
                  <img src="./assets/image/Vector(3).png" alt="" />
                  <span>pattietrusdale@gmail.com</span>
                </div>
                <div className="concact-info">
                  <img src="./assets/image/Vector(4).png" alt="" />
                  <span>+8421 223 2234</span>
                </div>
                <div className="concact-info">
                  <img src="./assets/image/Vector(6).png" alt="" />
                  <span>34 Milwaukee Avenue</span>
                </div>
              </div>
              <div style={{ paddingTop: 20 }}>
                <div className="concact-link">
                  <img src="./assets/image/Vector(7).png" alt="" />
                  <span>github.com/pattietrusdale</span>
                </div>
                <div className="concact-link" style={{ margin: "10px 0" }}>
                  <img src="./assets/image/Vector(1).png" alt="" />
                  <span>linkedin.com/in/pattie-trusdale-34...</span>
                </div>
                <div className="concact-link">
                  <img src="./assets/image/Vector(2).png" alt="" />
                  <span>facebook.com/pattie.trusdale</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div>Copyright 2019 © Academic System</div>
          <div>Designed &amp; Developed by Quang Dat Pham</div>
        </footer>
      </div>
      {status && <Popup status={status} setStatus={setStatus} />}
    </>
  );
}

export default Home;
