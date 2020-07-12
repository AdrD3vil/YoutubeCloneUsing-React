import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Search.style.css";
class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }
    handleChange = (e) => {
      this.setState({ term: e.target.value });
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.FromheaderFormSubmit(this.state.term);
    }
    render() { 
      
        return (  
            <Fragment>
               <div className="searchBlock">
                 <section>
                   <form className="form1" onSubmit={this.handleSubmit}>
                     <div className=" searchInput">
                       <input type="text" className="Input"placeholder="Search" value={this.state.term} onChange={this.handleChange}/>
                       <button className="btn but"><FontAwesomeIcon icon={faSearch} color="grey" className="butIcon"/></button>
                     </div>
                   </form>
                 </section>

               </div>
            </Fragment>
          );
    }
}
 
export default SearchComponent;
