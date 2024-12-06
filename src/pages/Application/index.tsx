import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class ApplicationWrapper extends Component {
    // user autentication
    // build user object to ReactContext
    // load navigation bar and footer
    render() {
        return (<>
            <h1 className="text-center">Application Wrapper</h1>
            <Link to="requisitos">Go to Requisitos</Link>
            <Outlet />
        </>)
    }
}