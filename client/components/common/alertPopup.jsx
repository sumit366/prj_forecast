'use strict';

import React from 'react';
import Modal from 'react-modal';

class AlertPopup extends React.Component{

    constructor(props){
        super(props);
        this.state = {alertText: "Do you want to proceed?", alertPopup:this.props.displayAlertPopup};
    }

    handleModalPopupClose(){
        this.setState({alertPopup:'none'});
    }

    render(){
        return (
            <div>
            <div className="delete-popup modal fade in" tabIndex="-1" id="alert-popup" role="dialog" aria-labelledby="myModalLabel" style={{display:this.props.displayAlertPopup}}>
                <div className="vertical-alignment-helper">
                    <div className="modal-dialog vertical-align-center" role="document">
                        <div className="modal-content" style={{width:'400px', top:'40px'}}>
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeAlertPopup}><span aria-hidden="true">&times;</span></button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-data">
                                    <p className="message text-center" style={{wordWrap: 'break-word'}}>{this.props.alertText}</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-default btn-ok" data-dismiss="modal" aria-label="Close" onClick={this.props.closeAlertPopup}><span>OK</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default AlertPopup;