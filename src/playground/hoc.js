// Higher Order Component (HOC):
//  A component(HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>
        This info is: {props.info}
        </p>
    </div>
);

const withAuthentication = (WrappedComponent) => {
    return (props) => {
        if(props.isAuthenticated){
            return (
                <WrappedComponent {... props} />
            );
        }else{
            return (
                <div>
                    <h1>You are not authorized to be here!</h1>
                </div>
            );
        }
    }
}

const AuthenticatedInfo = withAuthentication(Info);
ReactDOM.render(<AuthenticatedInfo isAuthenticated={false} info="good stuff" />, document.getElementById('app'));