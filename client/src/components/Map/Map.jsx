import { Map, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props) => {
    return (
        <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{}}
        />
    )
}

export default GoogleMap;
