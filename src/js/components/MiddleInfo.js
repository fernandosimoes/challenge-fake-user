import React, { Component } from 'react';

class MiddleInfo extends Component {
    render() {
        return (


            <div className="sport--type">
                <div className="infos">

                    <div className="info--item">
                        <div className="icon">
                            <i className="fas fa-puzzle-piece"></i>
                        </div>
                        <div className="informations">

                            <div className="smallinfo">
                                Sport Type
                        </div>
                            <div className="biginfo">
                                Cycling
                        </div>
                        </div>
                    </div>
                    <div className="info--item">
                        <div className="icon">
                            <i className="fas fa-trophy"></i>
                        </div>
                        <div className="informations">
                            <div className="smallinfo">
                                Mode
                        </div>
                            <div className="biginfo">
                                Advanced
                        </div>
                        </div>
                    </div>
                    <div className="info--item">
                        <div className="icon">
                            <i className="fas fa-map-signs"></i>
                        </div>
                        <div className="informations">

                            <div className="smallinfo">
                                Route
                        </div>
                            <div className="biginfo">
                                30 Miles
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MiddleInfo;