import React from 'react';

class TopBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {"user" : {}, "username": "sumit"}
    }

    render(){
        return (
            <header>
                <div className="nav-details">

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown" style={{marginRight: "50px"}}>
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <span className="glyphicon glyphicon-user"></span>
                                    <strong>{this.state.username}</strong>
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className="navbar-login">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="text-center">
                                                        <span className="glyphicon glyphicon-user icon-size"></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="text-left"><strong>Sumit Singh</strong></div>
                                                    <div className="text-left small">sumit.kumar6@genpact.com</div>
                                                    <div className="text-left">
                                                        <a href="#" className="btn btn-primary btn-block btn-sm">Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="divider navbar-login-session-bg"></li>
                                    <li><a href="#">Account Settings <span className="glyphicon glyphicon-cog pull-right"></span></a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">User stats <span className="glyphicon glyphicon-stats pull-right"></span></a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Messages <span className="badge pull-right"> 42 </span></a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Favourites Snippets <span className="glyphicon glyphicon-heart pull-right"></span></a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Sign Out <span className="glyphicon glyphicon-log-out pull-right"></span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>
        );
    }
}

export default TopBar;