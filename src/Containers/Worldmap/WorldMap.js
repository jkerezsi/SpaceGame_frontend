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
import { listAllCountry } from '../../actions/actions';

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

    componentWillMount() {
      const { listAllCountry } = this.props;
      listAllCountry();
    }

    handleCountryClick = (countryName) => {
      this.setState({ selectedCountryId: countryName });
      const { occupiedCountries } = this.props;
      console.log(occupiedCountries);
    };

    submitButton = (e) => {
      e.preventDefault();
      const isValid = this.validate();
      if (isValid === true) {
        const { selectCountry } = this.props;
        const { selectedCountryId } = this.state;
        selectCountry(selectedCountryId);
        console.log(selectedCountryId);
      }
      return false;
    }

    validate = () => {
      const { selectedCountryId } = this.state;
      if (!selectedCountryId) {
        const { error } = this.state;
        this.setState({ error: 'Please select a country!' });
        return false;
      }
      return true;
    };

    render() {
    //   console.log(mapInfo.objects.units.geometries[88].properties.name);
      return (
        <div style={wrapperStyles}>
          <h1>PLEASE SELECT YOUR COUNTRY</h1>
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
  occupiedCountries: state.mapReducer.countryList,
});

const mapDispatchToProps = {
  listAllCountry,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorldMap);
