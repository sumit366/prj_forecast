'use strict';

import React from 'react';
import { Router, Route, Link, IndexLink } from 'react-router';

const NAV_HEADERS = {TAGS: "Tags", TAGGROUP: "Groups", ALERTS:"Alerts", NEWRULE:"New Rule", REPORTS:"Reports", READERS:"Readers" };
const ACTIVE_CLASS = 'active';
const LINKS = {TAGS: "tags", TAGGROUP: "taggroups", ALERTS:"alerts", NEWRULE:"newrule", REPORTS:"reports", READERS:"Readers"};

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
        let active = NAV_HEADERS.TAGS;
        let child = active;
        if(this.context.router.isActive(LINKS.TAGS)){
           active = NAV_HEADERS.TAGS;
           child = active;
        }
        else if(this.context.router.isActive(LINKS.TAGGROUP)){
           active = NAV_HEADERS.TAGGROUP;
           child = active;
        }
        else if(this.context.router.isActive(LINKS.ALERTS) || this.context.router.isActive(LINKS.NEWRULE)){
           active = NAV_HEADERS.ALERTS;
           child = active;
        }
        else if(this.context.router.isActive(LINKS.REPORTS)){
           active = NAV_HEADERS.REPORTS;
           child = active;
        }
        else if(this.context.router.isActive(LINKS.READERS)){
           active = NAV_HEADERS.READERS;
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
            <div>
            <div className="sidebar">
                <div className="logo">
                    <img src="/static/resources/logo.png">
                    </img>
                </div>
                <ul className="nav nav-pills nav-stacked">
                    <li className={this.getClassName(NAV_HEADERS.TAGS)}  onClick={this.setActive.bind(this, NAV_HEADERS.TAGS)}>
                        <IndexLink to="tags">{this.props.accountVariable.Tags != null ? this.props.accountVariable.Tags : NAV_HEADERS.TAGS}</IndexLink>
                    </li>
                    <li className={this.getClassName(NAV_HEADERS.TAGGROUP)} onClick={this.setActive.bind(this, NAV_HEADERS.TAGGROUP)}>
                        <Link to="taggroups">{this.props.accountVariable.Groups != null ? this.props.accountVariable.Groups : "Groups"}</Link>
                    </li>
                    <li className={this.getClassName(NAV_HEADERS.READERS)} onClick={this.setActive.bind(this, NAV_HEADERS.READERS)}>
                        <Link to="readers">{this.props.accountVariable.Readers != null ? this.props.accountVariable.Readers : "Readers"}</Link>
                    </li>
                    <li className={this.getClassName(NAV_HEADERS.ALERTS)} onClick={this.setActive.bind(this, NAV_HEADERS.ALERTS)}><Link to="alerts">Alerts</Link></li>
                    <li className={this.getClassName(NAV_HEADERS.REPORTS)} onClick={this.setActive.bind(this, NAV_HEADERS.REPORTS)}><Link to="reports">Reports</Link></li>
                </ul>
            </div>
            <div className="sidebar-backdrop"></div>
            </div>
        );
    }
}

Navigation.contextTypes =  { router: React.PropTypes.object};

export {Navigation as default, NAV_HEADERS as Headers};