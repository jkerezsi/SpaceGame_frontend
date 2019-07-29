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
  constructor() {
    super();
    this.state = {
      selectedCountryCode: '',
      occupiedCountries: '',
      error: '',
      message: '',
    };
  }

  async componentWillMount() {
    const response = await fetch('http://localhost:3012/kingdom/map');
    const json = await response.json();
    setTimeout(() => this.loopAll(json), 1000);
  }

  handleCountryClick = (countryCode, countryName) => {
    const { occupiedCountries } = this.state;
    if (occupiedCountries.includes(countryCode)) {
      this.setState({ message: 'This country is taken' });
      this.setState({ selectedCountryCode: '' });
    } else {
      this.setState({ error: '' });
      this.setState({ selectedCountryCode: countryCode });
      this.setState({ message: `You have selected ${countryName}` });
    }
  };


    submitButton = (e) => {
      e.preventDefault();
      const isValid = this.validate();
      if (isValid === true) {
        const { selectedCountryCode } = this.state;
        const { selectCountry } = this.props;
        selectCountry(selectedCountryCode);
      }
      return false;
    }

    validate = () => {
      const { selectedCountryCode } = this.state;
      if (!selectedCountryCode) {
        this.setState({ error: 'Please select a country!' });
        return false;
      }
      return true;
    };

    checkCountryColor = (item) => {
      const { occupiedCountries } = this.state;
      const { selectedCountryCode } = this.state;
      let color = '';
      if (occupiedCountries.indexOf(item) > -1) {
        color = '#FF4500';
      } else if (selectedCountryCode === item) {
        color = '#00FF00';
      } else {
        color = '#D3D3D3';
      }
      return color;
    }


    loopAll = (object) => {
      const all = [];
      for (let i = 0; i < object.kingdoms.length; i += 1) {
        for (let j = 0; j < object.kingdoms[i].location.length; j += 1) {
          all.push(object.kingdoms[i].location[j]);
        }
      }
      this.setState({ occupiedCountries: all });
    }

    render() {
      const { error, occupiedCountries, message } = this.state;
      const { countryError } = this.props;
      if (occupiedCountries === '') {
        return (
          <div>
            <h2 style={{ color: 'white' }}>Loading...</h2>
          </div>
        );
      }
      return (
        <div>
          <div style={wrapperStyles}>
            <h2 style={{ color: 'white' }}>Please select your kingdom</h2>
            <h3 style={{ color: 'white' }}>{ error }</h3>
            <h3 style={{ color: 'white' }}>{ message }</h3>
            <h3 style={{ color: 'white' }}>{ countryError }</h3>
            <Button className="selectCountry" onClick={this.submitButton} buttonText="Submit" />
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
                <Geographies geography={mapInfo} disableOptimization>
                  {(geographies, projection) => geographies.map((geography, i) => (
                    <Geography
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      onClick={
() => this.handleCountryClick(mapInfo.objects.units.geometries[i].id, mapInfo.objects.units.geometries[i].properties.name)}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: this.checkCountryColor(mapInfo.objects.units.geometries[i].id),
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
                          fill: '#FFE4B5',
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
        </div>
      );
    }
}

const mapStateToProps = state => ({
  countryError: state.mapReducer.error,
});

const mapDispatchToProps = {
  selectCountry,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorldMap);
