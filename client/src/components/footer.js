import React from 'react';
import './styles.css';

export default () => (

    <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 footerleft ">
                <h3 className="logofooter">Logo Goes Here</h3>
                <h5 className="buff-f cap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lacus eget metus euismod lobortis eget vel eros.</h5>
              </div>
              <div className="col-md-4 col-sm-6 footerleft">
                <div className="logofooter"> Contact</div>
                  <p><i className="fa fa-lg fa-map-pin"></i> 123 S Somewhere Ave. #A, Irvine, CA 92618</p>
                  <p><i className="fa fa-lg fa-phone"></i> Phone : (909) 999-9999</p>
                  <p><i className="fa fa-lg fa-fax"></i> Fax : (909) 999-9999</p>
                  <p><i className="fa fa-lg fa-envelope"></i> E-mail : <a href="mailto:cs@dansumentor.com">cs@dansumentors.com</a></p>
              </div>
              <div className="col-md-2 col-sm-6 footerleft">
                <div className="logofooter"> Connect</div>
                  <p><i className="fa fa-lg fa-facebook-square"></i> <a href="https://www.facebook.com" target="_blank">Facebook</a></p>
                  <p><i className="fa fa-lg fa-linkedin-square"></i> <a href="https://www.linkedin.com" target="_blank">LinkedIn</a></p>
              </div>
            </div>
          </div>
        </footer>

        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>© 2017 - All Rights Reserved by Dansu Mentors, Inc.</p>
                    </div>
                    <div className="col-md-6">
                        <ul className="bottom_ul">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )