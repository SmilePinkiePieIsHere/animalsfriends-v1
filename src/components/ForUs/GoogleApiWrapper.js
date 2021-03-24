import { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };
    }

    // componentDidMount() {
    //     if (this.props.centerAroundCurrentLocation) {
    //         if (navigator && navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition(pos => {
    //                 const coords = pos.coords;
    //                 this.setState({
    //                     currentLocation: {
    //                         lat: coords.latitude,
    //                         lng: coords.longitude
    //                     }
    //                 });
    //             });
    //         }
    //     }
    //     this.loadMap();
    // }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        this.closingTheInfoWindow();
    };

    onMapClicked = (props) => {
        this.closingTheInfoWindow();
    };

    closingTheInfoWindow = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{ lat: 43.06078221918406, lng: 25.539293723296236 }}
                onClick={this.onMapClicked}
            >
                <Marker onClick={this.onMarkerClick}
                    name={'Общински приют Шемшево'} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAJWBsylZtEMDJKwehFZ1ggOW0_onV1UAs'
})(MapContainer);