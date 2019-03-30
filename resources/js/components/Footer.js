import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';


export default class Footer extends Component {
    render() {
        return (
            <div>
               {/* <!-- Footer --> */}
                <footer className="page-footer font-small special-color-dark pt-4">

                    {/* <!-- Footer Elements --> */}
                    <div className="container">

                        {/* <!-- Social buttons --> */}
                        <ul className="list-unstyled list-inline text-center">
                            <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1">
                                <i className="fab fa-facebook-f"> </i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1">
                                <i className="fab fa-twitter"> </i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1">
                                <i className="fab fa-google-plus-g"> </i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1">
                                <i className="fab fa-linkedin-in"> </i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a className="btn-floating btn-dribbble mx-1">
                                <i className="fab fa-dribbble"> </i>
                            </a>
                            </li>
                        </ul>
                        {/* <!-- Social buttons --> */}

                    </div>
                    {/* <!-- Footer Elements --> */}

                    {/* <!-- Copyright --> */}
                    <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="#"> Blog.com</a>
                    </div>
                    {/* <!-- Copyright --> */}

                </footer>
                {/* <!-- Footer --> */}
            </div>
        );
    }
}
