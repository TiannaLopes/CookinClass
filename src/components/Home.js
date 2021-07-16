import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const { logo, pic, pic2 } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleRegister = () => {
    history.push("/register");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="home-page">
      <div className="fitness-img-container">
        <div className="orange-bar">
          <h4>Come Have a taste for yourself</h4>
        </div>
        <div className="text-container-browser-classes">
          <h1>Baking Classes</h1>
          <p>
            Our experienced bakers and cooks walk you through some of their
            delicious recipes. Dont worry we wont tell your friends that you got
            help. Or make it a party and invite them to learn as well! You can
            choose from timed classes with experts or spend the day in our
            kitchen.
          </p>
          <Link to="/browse">
            <button id="browse-btn">Browse</button>
          </Link>
        </div>
      </div>
      <div className="about-section">
        <div className="about-section-title">
          <h2>From croissants to gelato</h2>
        </div>
        <div className="about-why-af">
          <div className="about">
            <h2>Bake with us</h2>
            <h1>About Maria's Bakery</h1>
            <ul>
              <li>
                <p>
                  {" "}
                  The Santilno Family has called this New York City Bourough
                  home for many years. We are proud to bring our finest skills
                  and tradiational methods from Italy to share here in NYC. We
                  value family and community and want to invite you to share in
                  making the world a sweeter place with us.
                </p>
              </li>
            </ul>
          </div>
          <div className="img-container1">
            <img src={pic} alt="fitness" />
          </div>
        </div>
        <div className="find-why-af">
          <div className="img-container2">
            <img src={pic2} alt="fitness" />
          </div>
          <div className="why">
            <h2>Choose your class</h2>
            <h1>How does it work?</h1>
            <ul>
              <li>
                <h3>1. Find and book lessons</h3>
                <p>Discover all the lessons and book a time.</p>
              </li>
              <li>
                <h3>2. Visit and check-in or stream</h3>
                <p>
                  Go to the location and check in with the app. Are you doing an
                  online class? Then you will receive a stream link via the app
                  and your inbox and the supplies will be shipped to your home.
                </p>
              </li>
              <li>
                <h3>3. Time to bake!</h3>
                <p>
                  Done to work, we will be blasting some good tunes and teach
                  you the best techniques.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div className="col1"></div>
      </footer>
      {!isLoggedIn && (
        <div className="static-footer">
          <div className="btn-container">
            <button className="for-user-type-client" onClick={handleRegister}>
              Register Here
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
