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
import { listAllCountry, selectCountry } from '../../actions/actions';


const wrapperStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto',
};


class WorldMap extends Component {
      state = {
        selectedCountryId: '',
        finalcountries: '',
        error: '',
      };


      async componentWillMount() {
        const response = await fetch('http://localhost:3012/kingdom/map');
        const json = await response.json();
        setTimeout(() => this.loopAll(json), 1000);
      }


  handleCountryClick = (countryName) => {
    const { finalcountries } = this.state;
    if (finalcountries.includes(countryName)) {
      this.setState({ error: 'This country is taken' });
    } else {
      this.setState({ selectedCountryId: countryName });
      this.setState({ error: `You have selected ${countryName}` });
    }
  };

    submitButton = (e) => {
      e.preventDefault();
      const isValid = this.validate();
      if (isValid === true) {
        const { selectedCountryId } = this.state;
        selectCountry(selectedCountryId);
        console.log(selectedCountryId);
      }
      return false;
    }

    validate = () => {
      const { selectedCountryId } = this.state;
      if (!selectedCountryId) {
        this.setState({ error: 'Please select a country!' });
        return false;
      }
      return true;
    };

    loopAll = (object) => {
      const all = [];
      for (let i = 0; i < object.kingdoms.length; i++) {
        for (let j = 0; j < object.kingdoms[i].location.length; j++) {
          all.push(object.kingdoms[i].location[j]);
        }
      }
      this.setState({ finalcountries: all });
      const { finalcountries } = this.state;
      console.log(finalcountries);
    }

    render() {
      console.log(mapInfo.objects);
      const { error } = this.state;
      const { finalcountries } = this.state;
      if (finalcountries === '') {
        return (
          <div>
            <h2 style={{ color: 'white' }}>Loading...</h2>
          </div>
        );
      }
      return (
        <div style={wrapperStyles}>
          <h1 style={{ color: 'white' }}>PLEASE SELECT YOUR COUNTRY</h1>
          <h3 style={{ color: 'white' }}>{ error }</h3>
          <Button className="selectCountry" onClick={this.submitButton} buttonText="SELECT" />
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
                {(geographies, projection) => geographies.map((geography, i) => (
                  <Geography
                    key={i}
                    onClick={() => this.handleCountryClick(mapInfo.objects.units.geometries[i].properties.name)}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: this.state.finalcountries.indexOf(mapInfo.objects.units.geometries[i].properties.name) > -1 ? '#FF0000' : '#ECEFF1',
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
