import "../styles/style.css";
import React from "react";
const Home = () => {
  return (
    <div>
      <div>
        <section>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src="/assets/member_photo/person1.jpeg" height="250px" />
                </div>
                <div className="contentBx">
                  <h3>
                    Mrunmayee Jakate
                    <br />
                    <span>TechGits-member</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li >
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li >
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li >
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src="/assets/member_photo/person2.jpg" height="250px" />
                </div>
                <div className="contentBx">
                  <h3>
                    Someone Famous
                    <br />
                    <span>Creative Designer</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li >
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li >
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src="/assets/member_photo/person3.jpg" height="250px" />
                </div>
                <div className="contentBx">
                  <h3>
                    Someone Famous
                    <br />
                    <span>Creative Designer</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li >
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li >
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;