import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { authenticate } from "../actions";

class Header extends Component {
    authButton() {
        const isAuthenticated = this.props.authenticated;
        return (
            <button onClick={ () => this.props.authenticate(!isAuthenticated) }>
                { isAuthenticated ? "Sign Out" : "Sign In" }
            </button>);
    }

    render() {
        return(
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        { this.authButton() }
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({ authenticated }) {
    return { authenticated };
}

export default connect(mapStateToProps, { authenticate })(Header);
