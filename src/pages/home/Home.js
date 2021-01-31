import React, { Fragment } from "react";
import PersonList from "../../components/PersonList";
import './style.css';
import logo from '../../images/logo-travelfactory.png'


const Home = () => (

  <Fragment>
    {/* <div className="main-home">
      <div className="home-grid">
        <div className="Header">
          <h1>Contact App</h1>

        </div>
        <PersonList />

      </div>
    </div> */}
    <section className="skewed-header">
      <div className="header-bg"></div>
      <div className="skewed-header-wrapper">
        <div className="skewed-header-content">
          <div className="heading-wrapper">
            <img src={logo} alt="logo" />

            <h1>Contact App</h1>
          </div>
        </div>
      </div>

    </section>
    <PersonList />

  </Fragment>
);

export default Home;
