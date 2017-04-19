import React from 'react';

class MiddleBar extends React.Component{

    constructor(props){
        super(props);
        this.state = { search: '' }
    }


    render(){
        return(
            <div className="middle-bar">
                <h3>{ this.props.navigation }</h3>
            </div>
        );
    }

    componentWillReceiveProps(newProps){
        this.setState({search : newProps.searchWord});
    }

}

export default MiddleBar;

