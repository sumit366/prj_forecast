import React from 'react';
import { Link } from 'react-router';
import pageAction from '../../actions/pageActions';
import pageStore from '../../stores/pageStore';


const NAV_NEXT = "NEXT";
const NAV_PREV = "PREV";

class Footer extends React.Component{

    constructor(props){
        super(props);
        this.state = {currentSelectedPage: pageStore.getCurrentPageNumber(),
        displayArr: ['Categories', 'Zones', 'Groups', 'Users', 'My Alerts'] };
        this.onPageFound = this.onPageFound.bind(this);
    }

    render(){
        
        return(
            <div style = {{display: this.props.displayComponent}}>
            <nav className="text-center">
                <ul className="pagination">
                  <li onClick={this.onPageSelected.bind(this, NAV_PREV)} ref={NAV_PREV}>
                      <a href="#" aria-label="Previous">
                        <span aria-hidden="true" className="glyphicon glyphicon-chevron-left"></span>
                      </a>
                  </li>
                  <li>
                      <a>{this.state.currentSelectedPage}</a>
                  </li>
                  <li onClick={this.onPageSelected.bind(this, NAV_NEXT)} ref={NAV_NEXT}>
                      <a href="#" aria-label="Next">
                        <span aria-hidden="true" className="glyphicon glyphicon-chevron-right"></span>
                      </a>
                  </li>
                </ul>
                <section id="result-per-page" style={{visibility: $.inArray(this.props.displayOnPage , this.state.displayArr) == -1 ? 'visible' : 'hidden'}}>
                    show
                    <select id="result-count" ref="mySelect" >
                        <option value='8'> 8 per page </option>
                        <option value='20'> 20 per page </option>
                        <option value='100'> 100 per page </option>
                        <option value='200'> 200 per page </option>
                        <option value='500'> 500 per page </option>
                        <option value='10000'> All </option>
                    </select>
                </section>
            </nav>
            <div className="footer" style={{float: 'right', marginRight: '4%'}}><a href="mailto:support@link-labs.com">Need Help?</a></div>
            </div>


        );
    }


    onPageSelected(refName, event){
        event.preventDefault();
        var nextValue = 0;
        if(refName == NAV_PREV && this.state.currentSelectedPage > 1){
            pageAction.requestPrevious();
        }
        else if(refName == NAV_NEXT){
            pageAction.requestNext();
        }
    }

    onPageFound(pageNumber) {
        this.setState({currentSelectedPage: pageNumber});
    }
    
    componentDidMount(){
        pageStore.addPageFoundListener(this.onPageFound);
        var self = this;

        $(this.refs['mySelect']).select2({
            minimumResultsForSearch: Infinity
        }).on('change', function() {
            self.handlePerPage();
        });
    }

    componentWillUnmount() {
        pageStore.removePageFoundListener(this.onPageFound);
    }

    handlePerPage() {

        var value = parseInt( $('#result-count').val() );
        if(value == 10000){
            $('.pagination').css("visibility", 'hidden');
        }else {
            $('.pagination').css("visibility", 'visible');
        }
        this.props.onPerPageValueChange(1, value);
    }

}

export default Footer;