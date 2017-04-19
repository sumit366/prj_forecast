import React from 'react';

class TopBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {"username": $("#username").val(), "role": $("#role").val()}
        this.impersonate = $("input[name='impersonate']").val();
    }

    handleLoginAsAdmin(e){
        e.preventDefault();
        var ll = "/adminaccess?type=admin"
        window.location = ll;
    }

    render(){
        var l = '/exit-impersonate?'+this.impersonate
        if(this.impersonate != null)
        {
        return (
        <header>
          <div className="nav-details">
             <div className="back-arrow">
			     <span className="icon icon-back" id="back-icon"></span>
			 </div>
			 <button type="button" className="navbar-toggle">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
             </button>
             <div className="block">
                <a href={l}>Exit <span className="icon icon-logout"></span></a>
             </div>
            <p>{this.state.username}</p>
            <div className="btn btn-primary user-type" style={{display: this.state.role == 'Admin' ? "block" :"none"}} onClick={this.handleLoginAsAdmin.bind(this)} >Admin</div>
          </div>
        </header>);

        } else{

         return (
        <header>
          <div className="nav-details">
            <div className="back-arrow">
			     <span className="icon icon-back" id="back-icon"></span>
			 </div>
			 <button type="button" className="navbar-toggle">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
             </button>
            <div className="block">
                <a href="/logout">Logout<span className="icon icon-logout"></span></a>
            </div>
            <p>{this.state.username}</p>
            <div className="btn btn-primary user-type" style={{display: this.state.role == 'Admin' ? "block" :"none"}} onClick={this.handleLoginAsAdmin.bind(this)} >Admin</div>
          </div>
        </header>);


        }
    }
}

export default TopBar;