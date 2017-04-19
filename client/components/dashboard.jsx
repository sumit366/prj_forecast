import React from 'react';
import {RouterHandler} from 'react-router';

import Navigation from './common/navigation.jsx';
import MiddleBar from './common/middleBar.jsx';
import TopBar from './common/topBar.jsx';
/*import Footer from './common/footer.jsx';
import PageStore from '../stores/pageStore';
import pageAction from  '../actions/pageActions'
import AccountSettingAction from  '../actions/accountSettingAction'*/

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {navigation : '', openPopup: false, openImportPopup:false, searchWord: '', currentPage: 1, pageCount:10,
                      pageHeading : '', displayMiddleBarComp: 'block', displayFooterComp: 'block', perPage: 8,
                      accountVariable: {},
                      accountVariableInSingularForm: {}};
        this.setPopupState = this.setPopupState.bind(this);
        this.setTotalPageCount = this.setTotalPageCount.bind(this);
        this.setImportPopupState = this.setImportPopupState.bind(this);
        // this.setImportReadersPopupState = this.setImportReadersPopupState.bind(this);

    }

    render(){

        return(
            <div className="wrapper">
                  <Navigation onNavigationChange={this.onNavigationChange.bind(this)} accountVariable = {this.state.accountVariable}/>
                  <main>
                      <TopBar accountVariableInSingularForm = {this.state.accountVariableInSingularForm}/>
                      <div className="content">
                        <MiddleBar navigation={this.state.pageHeading}
                                   onAddButtonPressed={this.onAddButtonPressed.bind(this)}
                                   onUploadButtonPressed={this.onUploadButtonPressed.bind(this)}
                                   onSearch={this.onSearchAction.bind(this)}
                                   searchWord={this.state.searchWord}
                                   displayComponent={this.state.displayMiddleBarComp}
                                   accountVariable = {this.state.accountVariable}/>

                          {React.cloneElement(this.props.children,  {openPopup:this.state.openPopup,
                                                                     openImportPopup:this.state.openImportPopup,
                                                                     searchWord: this.state.searchWord,
                                                                     currentPage:this.state.currentPage,
                                                                     onPageCountFound: this.setTotalPageCount,
                                                                     onPopupAction: this.setPopupState,
                                                                     onImportPopupAction: this.setImportPopupState,
                                                                     perPage: this.state.perPage,
                                                                     accountVariable : this.state.accountVariable,
                                                                     accountVariableInSingularForm: this.state.accountVariableInSingularForm})}

                      </div>
                  </main>
            </div>
        );
    }

    onPerPageValueChange(pageNumber, perPageVal){
        if(perPageVal == 'all'){
            this.setState({currentPage : pageNumber, perPage : ''});
        }else{
            this.setState({currentPage : pageNumber, perPage : perPageVal});
        }

    }

    onNavigationChange(selectedValue, header){
        let displayMiddle = 'block', displayFooter = 'block';
        if(typeof(this.props.location.query.name) != 'undefined'){
            header = this.props.location.query.name;
        }
        if(selectedValue == 'Alerts'){
            displayMiddle = 'none';
            displayFooter = 'none';
        }
        this.setState({navigation : selectedValue, openPopup:false, openImportPopup:false, searchWord: '', currentPage: 1,
                       pageHeading : header, displayMiddleBarComp: displayMiddle, displayFooterComp: displayFooter, perPage : 8});


    }

    onAddButtonPressed(){
        this.setState({openPopup: true});
    }

    onUploadButtonPressed(){
        this.setState({openImportPopup: true});
    }

    onSearchAction(searchedText){
        this.setState({searchWord: searchedText, currentPage: 1});

    }

    onPageSelectionChanged(pageNumber){
        this.setState({currentPage : pageNumber});
    }

    setTotalPageCount(count){
        this.setState({pageCount: count});
    }

    setPopupState(open){
        debugger;
        this.setState({openPopup : open});
    }

    setImportPopupState(open){
        this.setState({openImportPopup : open});
    }

    componentWillMount(){

    }

   /*setImportReadersPopupState(open){
        debugger;
        this.setState({openImportReadersPopup : open});
    }*/

}

export default Dashboard;