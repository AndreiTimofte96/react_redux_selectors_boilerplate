import React from 'react';
import './style.scss';
import btnsearchone from '../../images/btn-search-one.png';
import dropdownicon from '../../images/passenger-icon.png';
import search from '../../images/search.png';
import calendaricon from '../../images/calendar-icon.png';
import iconsearchdropdown from '../../images/icon-search-dropdown.png';

class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
     <div>
      <div className="search d-none d-xs-none d-sm-none d-lg-block d-xl-block d-md-none">
        <div className="container">
           <div className="d-flex justify-content-start">
              <div className="form-group">
                <label for="from">From</label>
                <input type="text" className="form-control border-0 rounded-0 rounded-left" id="from" value="Tel Aviv(Any)"/>
              </div>
              <div className="form-group">
                <label for="to"></label>
                <button type="button" id="btn-first"><img src={btnsearchone} alt="btnsearchone"/></button>
              </div>
              <div className="form-group custom-margin-right">
                <label for="to">To</label>
                <input type="text" className="form-control border-0 rounded-0 rounded-right" id="to" value="Barcelona (BCN)"/>
              </div>
              <div className="form-group">
                <label for="depart">Depart</label>
                <input type="date" className="form-control border-0 rounded-0 right-border-custom" id="depart" value="2018-07-20" required="required"/>
              </div>
              <div className="form-group custom-margin-right">
                <label for="return">Return</label>
                <input type="date" className="form-control border-0 rounded-0" id="return" value="2018-07-28" required="required"/>
              </div>
              <div className="form-group custom-margin-right custom-width-select">
                <label for="travelers">Travelers</label>
                <div className="dropdown">
                   <button className="btn btn-secondary dropdown-toggle text-left" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    2 Adults <img src={iconsearchdropdown} className="custom-position-icon"/>
                   </button>
                   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                     <a className="dropdown-item" href="#">3 Adults</a>
                     <a className="dropdown-item" href="#">4 Adults</a>
                     <a className="dropdown-item" href="#">5 Adults</a>
                   </div>
                </div>
              </div>
              <div className="form-group custom-width-select">
                <label for="class">Class</label>
                 <div className="dropdown">
                   <button className="btn btn-secondary dropdown-toggle text-left" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Economy <img src={iconsearchdropdown} className="custom-position-icon"/>
                   </button>
                   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                     <a className="dropdown-item" href="#">Business</a>
                   </div>
                </div>
              </div>
              <div className="form-group">
                <button type="button" className="btn-general btn-blue" id="btn-search">SEARCH</button>
              </div>
            </div>
            <div className="list-search d-none d-xs-none d-sm-none d-lg-block d-xl-block d-md-none">
              <ul className="list-inline">
                <li>
                  <label className="radio-inline">
                      <input type="radio" value="1" name="radioone"/> Roundtrip
                  </label>
               </li>
               <li>
                  <label className="radio-inline">
                      <input type="radio" value="2" name="radiotwo"/> One way
                  </label>
               </li>
               <li>
                  <label className="radio-inline">
                      <input type="radio" value="3" name="radiothree"/>Multicy
                  </label>
              </li>
            </ul>
          </div>
       </div>
    </div>
    <div className="search-tablet d-lg-none d-xl-none d-md-block d-sm-none d-sm-block d-xs-block">
      <div className="container">
        <div className="d-flex justify-content-start custom-display-mobile">
           <div className="section-one">
             <button type="button"><img src={search}/></button>
           </div>
           <div className="section-two">
             <div className="d-flex justify-content-start">
                <h5>Tel Aviv(Any)</h5> <span>-</span> <h5>Barcelona(BCN)</h5>
             </div>
             <div className="d-flex justify-content-start">
                <p className="d-none-small-phone">Roundtrip</p> <span className="d-none-small-phone">|</span> <p>2 Travelers</p> <span>|</span>  <p>Economy</p>
             </div>
           </div>
           <div className="section-three">
             <div className="d-flex justify-content-start">
               <img src={calendaricon}/>
               <p>20.07.2018</p> <span>-</span> <p>27.07.2018</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>);
  }
}

export default Search;
