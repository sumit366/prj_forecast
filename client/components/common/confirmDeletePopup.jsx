'use strict';

import React from 'react';
import Modal from 'react-modal';

class ConfirmDelete extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
            <div className="alert-popup-box">
                <div style={{display: this.props.message != '' ? 'block' : 'none'}} className="alert alert-warning alert-dismissible fade in" role="alert"> <button type="button" className="close" onClick={this.props.handleFailurePopupClose} aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>{this.props.message}</strong></div>
            </div>
            <div className="delete-popup modal fade in" tabIndex="-1" id="delete-popup" role="dialog" aria-labelledby="myModalLabel">
                <div className="vertical-alignment-helper">
                    <div className="modal-dialog vertical-align-center" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-data">
                                    <p className="message text-center">Do you want to proceed?</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-default btn-cancel" data-dismiss="modal" aria-label="Close" ><span>CANCEL</span></button>
                                <button className="btn btn-default btn-delete" data-dismiss="modal" aria-label="Close" onClick={this.props.proceedDeletion}><span>DELETE</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default ConfirmDelete;