'use strict';

import React from 'react';
import { Router, Route, Link, IndexLink } from 'react-router';

const NAV_HEADERS = {HOME : 'Home', DATA_STUDIO: 'Data Studio', ANALYZING_STUDIO: 'Analyzing Studio', REPORTING_STUDIO: 'Reporting Studio'};
const ACTIVE_CLASS = 'active';
const LINKS = {HOME : "home", DATA_STUDIO: "data_studio", ANALYZING_STUDIO: "analyzing_studio", REPORTING_STUDIO: "reporting_studio"};

class Navigation extends React.Component{

    constructor(props){
        super(props);
        this.state = {active: '', selectedNav: ''};
    }

    getClassName(value){
        return value === this.state.selectedNav ? ACTIVE_CLASS : 'default';
    }

    setActive(value,child){
        if(this.state.active != child){
            this.setState({active: child, selectedNav : value});
            this.props.onNavigationChange(value, child);
        }
    }


    activate(props){
        let active = NAV_HEADERS.HOME;
        let child = active;
        if(this.context.router.isActive(LINKS.HOME)){
           active = NAV_HEADERS.HOME;
           child = active;
        }
        else if (this.context.router.isActive(LINKS.DATA_STUDIO)){
            active = NAV_HEADERS.DATA_STUDIO;
            child = active;
        }
        else if (this.context.router.isActive(LINKS.ANALYZING_STUDIO)){
            active = NAV_HEADERS.ANALYZING_STUDIO;
            child = active;
        }
        else if (this.context.router.isActive(LINKS.REPORTING_STUDIO)){
            active = NAV_HEADERS.REPORTING_STUDIO;
            child = active;
        }
        this.setActive(active, child);
    }

    componentWillMount(){
        this.activate(this.props);
    }

    componentWillReceiveProps(newProps){
        this.activate(newProps);
    }

    render(){
        return(
            <div className="sidebar">
                <div>
                    <div className="menu"></div>
                    <div className="menu"></div>
                    <div className="menu"></div>
                </div>
                <ul className="nav nav-pills nav-stacked">
                    <li className={this.getClassName(NAV_HEADERS.HOME)} onClick={this.setActive.bind(this, NAV_HEADERS.HOME)}>
                        <IndexLink to="home">{NAV_HEADERS.HOME}</IndexLink>
                    </li>
                    <li className={this.getClassName(NAV_HEADERS.DATA_STUDIO)} onClick={this.setActive.bind(this, NAV_HEADERS.DATA_STUDIO)}>
                        <Link to="data_studio">{NAV_HEADERS.DATA_STUDIO}</Link>
                    </li>
                    <li className={this.getClassName(NAV_HEADERS.ANALYZING_STUDIO)} onClick={this.setActive.bind(this, NAV_HEADERS.ANALYZING_STUDIO)}>
                        <Link to="analyzing_studio">{NAV_HEADERS.ANALYZING_STUDIO}</Link>
                    </li>
                    <li className={this.getClassName(NAV_HEADERS.REPORTING_STUDIO)} onClick={this.setActive.bind(this, NAV_HEADERS.REPORTING_STUDIO)}>
                        <Link to="reporting_studio" >{NAV_HEADERS.REPORTING_STUDIO}</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

Navigation.contextTypes =  { router: React.PropTypes.object};

export {Navigation as default, NAV_HEADERS as Headers};