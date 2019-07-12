/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import mapInfo from './world-50m.json';
import Button from '../../Components/Button';
import { selectCountry } from '../../actions/actions';

const wrapperStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto',
};

class WorldMap extends Component {
    state = {
      selectedCountryId: '',
      error: '',
    };

    handleCountryClick = (countryName) => {
      this.setState({ selectedCountryId: countryName });
      const { selectCountry } = this.props;
      selectCountry(countryName);
      console.log(countryName);
      console.log(selectCountry);
    };

    submitButton = (e) => {
      e.preventDefault();
    };

    render() {
    //   console.log(mapInfo.objects.units.geometries[88].properties.name);
      const { mapRegister } = this.props;
      return (
        <div style={wrapperStyles}>
          <h1>PLEASE SELECT YOUR COUNTRY</h1>
          <h3>{ mapRegister }</h3>
          <Button onClick={this.submitButton} buttonText="SELECT" />
          <ComposableMap
            projectionConfig={{
              scale: 205,
              rotation: [-11, 0, 0],
            }}
            width={980}
            height={551}
            style={{
              width: '100%',
              height: 'auto',
            }}
          >
            <ZoomableGroup center={[0, 20]} disablePanning>
              <Geographies geography={mapInfo}>
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== 'ATA' && (
                <Geography
                  key={i}
                  onClick={() => this.handleCountryClick(mapInfo.objects.units.geometries[i].properties.name)}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: '#ECEFF1',
                      stroke: '#607D8B',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                    hover: {
                      fill: '#607D8B',
                      stroke: '#607D8B',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#FF5722',
                      stroke: '#607D8B',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                  }}
                />
                ))}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  mapRegister: state.mapReducer.message,
});

const mapDispatchToProps = {
  selectCountry,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorldMap);
