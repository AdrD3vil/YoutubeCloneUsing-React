import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo,faTh,faEllipsisV,faUser} from '@fortawesome/free-solid-svg-icons';
class RightMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                
                    <div className="iconRight">
                    <span className="rightIcon"><FontAwesomeIcon icon={faVideo} /></span>
                    <span className="rightIcon"><FontAwesomeIcon icon={faTh} /></span>
                    <span className="rightIcon"><FontAwesomeIcon icon={faEllipsisV} /></span>
                   
                   <button className="btn but2"><span className="user"><FontAwesomeIcon icon={faUser}/></span>SIGN IN</button>
                    
                </div>
            </Fragment>
         );
    }
}
 
export default RightMenu;
