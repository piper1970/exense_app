import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/authentication';


export class LoginPage extends React.Component{

    onClick = () => {
        this.props.startLogin();
    }
    render(){
        return (
            <div>
                <button onClick={this.onClick}>Login</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);