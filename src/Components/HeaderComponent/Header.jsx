import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.style.css";
import SearchComponent from '../SearchComponent/Search';
import RightMenu from '../RightMenu/RightMenu';
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return ( 
            <Fragment>
                <section className="headerBlock">
                    <article>
                        
                        <div className="logo">
                        <FontAwesomeIcon icon={faBars} className="barIcon"/>
                            <img src="youtube-logo.png" alt="logo"/>
                            <span className="countryCode"><sup>IN</sup></span>
                        </div>
                        <div className="search">
                            <SearchComponent  FromheaderFormSubmit ={this.props.FromAppFormSubmit}/>
                        </div>
                        <div className="menuBlock">
                            <RightMenu />
                        </div>
                    </article>

                </section>
            </Fragment>
         );
    }
}
 
export default HeaderComponent;
