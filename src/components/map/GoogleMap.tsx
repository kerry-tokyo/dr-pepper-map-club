import * as React from "react";
import * as ReactDOM from "react-dom";
import Div100vh from "react-div-100vh";

import Marker from "./Marker";

interface GoogleMapProps {
   markerPositions: google.maps.LatLng[];
}

interface GoogleMapState {
    map: google.maps.Map;
}

export default class GoogleMap extends React.Component<GoogleMapProps, GoogleMapState> {

    state = {
        map: null
    };

    constructor() {
        super();
    }

    componentDidMount() {
        const map = new google.maps.Map(
            ReactDOM.findDOMNode(this.refs["top"]),
            {
                center: new google.maps.LatLng(0,0),
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
                
            }
        );
        this.setState({ "map": map });
    }
    render() {
        if (this.state.map) {
            return (
                <div>
                    <div ref="top" style={{ height: 100vh }}>
                    {this.props.markerPositions.map((position) => {
                        <Marker positon={position} map={this.state.map}/>
                    })}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div ref="top" style={{ height: 500 }}>
                    </div>
                </div>
            );
        }
    }

}