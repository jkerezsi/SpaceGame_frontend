import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHelloWorld } from '../../actions/actions';

class HelloWorldRedux extends Component {
  componentDidMount() {
    const { getHelloWorld } = this.props;
    getHelloWorld();
  }

  render() {
    const { helloWorld } = this.props;
    return (
      helloWorld ? (
        <div>
          {helloWorld}
        </div>
      ) : null
    );
  }
}

const mapStateToProps = store => ({
  helloWorld: store.helloworld.say_hi,
});

const mapDispatchToProps = {
  getHelloWorld,
};

HelloWorldRedux.propTypes = {
  getHelloWorld: PropTypes.func.isRequired,
  helloWorld: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HelloWorldRedux);
