import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import heroesmeetLogo from '../assets/images/heroesmeet-logo.jpg';
import { MDBCol, MDBIcon } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import all from '../assets/font-awsome/css/all.css';
import sty from '../assets/css2/style.css';
import bootstrapCss from '../assets/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import userProfile1 from "../assets/images/user-profile_1.png";
import userProfile from "../assets/images/user-profile.png";
import userProfile2 from "../assets/images/user-profile_2.png";
import userProfile3 from "../assets/images/user-profile_3.png";
import findUser from "../assets/images/find-user.png";
import heroesMeetLoginLogo from "../assets/images/heroesmeet-login-logo.png";
import menuLogo from "../assets/images/menu_logo.png";
import MetaTags from 'react-meta-tags';
import Favicon from 'react-favicon';
import favicon from "../assets/images/favicon.png"
import findmatchplaceholder from "../assets/images/placeholder.jpg"

class userAcccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      womenClicked: false
    };
  }


  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  render() {
    console.log(this.state.womenClicked, '***********')
    return (
      <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Start meeting new people in your area! If you already have an account"></meta>
        <MetaTags>
          <title>HeroesMeet - Find Your Mate</title>
          <meta name="description" content="Start meeting new people in your area! If you already have an account" />
          <meta property="og:title" content="Heroes Meet - Find Your Mate" />
          <meta property="og:image" content={favicon} />
        </MetaTags>
        <Favicon url={favicon} />
        <link rel="stylesheet" href={sty} />
        <link href={all} rel="stylesheet" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href={bootstrapCss} />
        <header id="user-dashboard-header">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="heroesmeet_main_logo">
                  <a href="#"><img src={heroesmeetLogo} /></a>
                </div>
                <span id="mobile-toogle-opner" style={{ "font-size": 30, "cursor": 'pointer' }} onClick={() => this.openNav()}>&#9776;</span>
              </div>

              <div className="menubar col-md-9">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="collapse navbar-collapse" id="site-main-bar">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fas fa-user" /> Profile</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fas fa-bell" /> Notification</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
                <div className="menu-logo">
                  <img src={menuLogo} alt="User one" />
                </div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fas fa-user" /> Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fas fa-bell" /> Notification</a>
                  </li>
                </ul>
                <footer id="menu-footer">
                  <div className="row">
                    <div className="col-md-12">

                      <a href="#" className="btn theme-color-btn btn-primary" data-toggle="modal" data-target="#login-modal"><i className="fab fa-android"></i> Get HeroesMeet</a>

                      <a href="#" className="btn theme-color-btn btn-primary" data-toggle="modal" data-target="#login-modal"><i className="fab fa-apple"></i> Get HeroesMeet</a>

                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="footer-social-icon">
                        <ul>
                          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                          <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                          <li><a href="#"><i className="fab fa-pinterest-square"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </footer>

              </div>

            </div>


          </div>
        </header>
        <section id="user-message-box">
          <div className="container">
            <div className="row">
              <div className="col-md-4 user-message-box-colum">
                <div className="row">
                  <div className="col-md-12">
                    <div className="user-profile-tag">
                      <div className="user-imgae">
                        <img src={userProfile} />
                      </div>
                      <div className="user-name">
                        <h3>John Samith</h3>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="row">
                <div className="col-md-12">
                    <div className="find-you-matches-here">
                      <img src={findmatchplaceholder} />
                        <h3> Find your matches here
Start discovering people to get matches. </h3>
                    </div>
                </div>
              </div>

              </div>
              {this.state.womenClicked ?
                <div className="col-md-8 user-message-body-colum">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="find-heroes">
                        <h2>HeroesMeet Match</h2>
                        <img src={findUser} />
                      </div>
                    </div>
                  </div>
                </div> :
                <div class="col-md-8 user-message-body-colum">
                  <div class="row">
                    <div class="col-md-12">

                      <h3>Choose a made that fits what you’re looking for!</h3>


                      <h2>Let’s get HeroesMeet</h2>

                      <p>And who are you interested in?</p>

                      <button type="button" class="col-md-12 btn theme-color-them-btn btn-primary">Men</button>
                    </div>
                    <div class="col-md-12">

                      <button type="button" onClick={() => this.setState({ womenClicked: true })}
                        class="col-md-12 btn theme-color-them-btn btn-primary">Women</button>
                    </div>
                    <div class="col-md-12">
                      <button type="button" class="col-md-12 btn theme-color-them-btn btn-primary">Everyone</button>

                    </div>
                  </div>
                </div>}

            </div>
          </div>
        </section>
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="footer-logo">
                  <img src={heroesmeetLogo} alt="User one" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-social-icon">
                  <ul>
                    <li><a href="#"><i className="fab fa-instagram" /></a></li>
                    <li><a href="#"><i className="fab fa-facebook-square" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter-square" /></a></li>
                    <li><a href="#"><i className="fab fa-pinterest-square" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="footer-main-nav">
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Guidelines</a></li>
                    <li><a href="#">Term &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Careers</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="copy-right">
                  <p> © 2020 HeroesMeet | All Rights Reserved </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Modal */}
        <div className="modal fade" id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <div className="login-form">
                        <div className="logo">
                          <img src={heroesMeetLoginLogo} alt="User one" />
                        </div>
                        <form>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope-open" /></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                          </div>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1"><i className="fas fa-unlock-alt" /></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                          </div>
                          <button type="button" className="col-md-12 btn theme-color-them-btn btn-primary">Login</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      <div className="login-left">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                        <h2>Find My Kind</h2>
                        <p>Why heroesmeet? Everyone wants someone to save them from the malady of being in the single dating lifestyle.  So as much as you are saving her from she's saving you too.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div className="modal login-signup-modal fade" id="signup-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <div className="login-form">
                        <div className="logo">
                          <img src={heroesMeetLoginLogo} alt="User one" />
                        </div>
                        <form>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope-open" /></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                          </div>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1"><i className="fas fa-unlock-alt" /></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                          </div>
                          <button type="button" className="col-md-12 btn theme-color-them-btn btn-primary">Get Started</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      <div className="login-left">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                        <h2>Find My Kind</h2>
                        <p>Why heroesmeet? Everyone wants someone to save them from the malady of being in the single dating lifestyle.  So as much as you are saving her from she's saving you too.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      //     <Container fluid={false}>
      //     <Row style={{    display: "flex"}}>
      //         <Col xs={8} md={8} sm={8} style={{margin: "1% 0% 1% 2%"}}>

      //         <img src={heroesmeetLogo} style={{width: "50%"}}/>

      //                       </Col>
      //         <Col xs={4} md={4} sm={4}>




      //         <input style={{width: "320px",height: "21px", margin: "6% 0% 0% 0%"}} type="text" placeholder="Search" aria-label="Search" /><FontAwesomeIcon icon={faSearch} />

      //         </Col>
      //         <Col xs={4} md={4} sm={4}>
      //         <FontAwesomeIcon icon={faUser} style={{width: "320px",height: "21px", margin: "6% 0% 0% 0%"}}/>Profile
      //         </Col>
      //      </Row>
      // <Row style={{border:"1px solid black",height:'90vh',display: "flex"}}>
      //   <Col style={{border:"1px solid black",height:'inherit'}} xs={3} md={3}> Your Name    
      //   </Col>
      //   <Col style={{border:"1px solid black",height:'inherit'}} xs={9} md={9}>
      //   <img src={imageGirl} style={{width: "80%"}}/>
      //   </Col>
      // </Row>   
      // </Container>

    );
  }
}

export default userAcccountSettings;
