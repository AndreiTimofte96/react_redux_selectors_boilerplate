import React from 'react';
// import { Link } from 'react-router-dom';
import noLuggageIcon from '../../images/no-luggage-icon.png';
import wizzLogo from '../../images/wizz.png';
import airFranceLogo from '../../images/air-france-icon.png';
import './style.scss';

export default class FlightDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { showModal } = this.props;
    return (
      // <div className={`modal ${showModal ? 'd-block' : 'd-none'}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className={`modal background ${showModal ? 'd-block' : 'd-none'}`} id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">

          <div className="modal-content row">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="row">
                <div className="col-md-8 col-12 py-3 left">
                  <div className="outbound py-3">
                    <div className="title row">
                      <div className="col-3 text-center"> <b className="">Outbound </b> </div>
                      <div className="col-5">Wed, 20.07.2018</div>
                      <div className="col-1"><img src={noLuggageIcon} alt="No luggage" /> </div>
                    </div>
                    <div className="flight-info mt-2">
                      <div className="subtitle row align-items-center">
                        <div className="offset-1 offset-lg-2 col-1">  <img src={wizzLogo} alt="Company logo"></img> </div>
                        <div className="col-9 col-lg-8 ml-3"> Air France AF90881 | Operated by Airfrance City Line</div>
                      </div>

                      <div className="flight row mt-3 align-items-center">
                        <div className="ml-4 col-2 text-center total-time">5h 30m</div>
                        <div>
                          <div className="blue-dot" />
                          <div className="vertical-bar" />
                          <div className="blue-dot" />
                        </div>
                        <div className="col-8 journey-time">
                          <div>
                            18:30
                            TLV Ben Gurion, Tel Aviv
                          </div>
                          <div className="mt-2">
                            00:55
                            SVO Sheremetyevo, Moscow
                          </div>
                        </div>
                      </div>

                      <div className="flight-connection text-center py-2 mt-3">
                        2h 15m Connection
                      </div>

                      <div className="flight row mt-3 align-items-center">
                        <div className="ml-4 col-2 text-center total-time">2h 50m</div>
                        <div>
                          <div className="blue-dot" />
                          <div className="vertical-bar" />
                          <div className="blue-dot" />
                        </div>
                        <div className="col-8 flight-time">
                          <div>
                            03:15
                            SVO Sheremetyevo, Moscow
                          </div>
                          <div className="mt-2">
                            09:20
                            BCN El Prat, Barcelona
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 text-center journey-duration">
                        Journey duration: 7h 30m
                      </div>
                    </div>
                  </div>
                  <div className="return py-3">
                    <div className="title row">
                      <div className="col-3 text-center"> <b className="">Return </b> </div>
                      <div className="col-5">Thu, 28.07.2018</div>
                      <div className="col-1"><img src={noLuggageIcon} alt="No luggage" /> </div>
                    </div>
                    <div className="flight-info mt-2">
                      <div className="subtitle row align-items-center">
                        <div className="offset-1 offset-lg-2 col-1">  <img src={airFranceLogo} alt="Company logo"></img> </div>
                        <div className="col-9 col-lg-8 ml-3"> Air France AF90881 | Operated by Airfrance City Line</div>
                      </div>

                      <div className="flight row mt-3 align-items-center">
                        <div className="ml-4 col-2 text-center total-time">4h 50m</div>
                        <div>
                          <div className="blue-dot" />
                          <div className="vertical-bar" />
                          <div className="blue-dot" />
                        </div>
                        <div className="col-8 journey-time">
                          <div>
                            18:30
                            TLV Ben Gurion, Tel Aviv
                          </div>
                          <div className="mt-2">
                            00:55
                            SVO Sheremetyevo, Moscow
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 text-center journey-duration">
                        Journey duration: 7h 30m
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12 p-3 right">
                  <div className="row remove-margins">
                    <div className="col-12 title mb-4">Details</div>
                    <div className="col-6 col-md-12 details">
                      <div>
                        <div className="subtitle mb-2">Baggage</div>
                        <div className="d-flex justify-content-between">
                          <p>1 bag per traveller</p>
                          <p>20kg</p>
                        </div>
                      </div>
                      <div>
                        <div className="subtitle mb-2">Cancellation fees</div>
                        <div className="d-flex justify-content-between">
                          <p>No return</p>
                        </div>
                      </div>
                      <div><u>Terms and conditions</u></div>
                    </div>
                    <div className="col-6 col-md-12 mt-4 price">
                      <div>
                        <div className="subtitle mb-2">Price</div>
                        <div className="d-flex justify-content-between">
                          <p>2 Adults</p>
                          <p>$ 503</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Taxes & Fees</p>
                          <p>$ 130</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="subtitle mb-2">Total</div>
                        <div className="subtitle mb-2">$ 1 136</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex justify-content-md-center justify-content-end">
                        <button className="btn-general btn-blue">ORDER NOW</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
