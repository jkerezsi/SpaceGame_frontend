import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHelloWorldSaga } from '../../actions/actions';

class HelloWorldSaga extends Component {
  componentDidMount() {
    const { getHelloWorldSaga } = this.props;
    getHelloWorldSaga();
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
  helloWorld: store.helloworld.say_hi_saga,
});

const mapDispatchToProps = {
  getHelloWorldSaga,
};

HelloWorldSaga.propTypes = {
  getHelloWorldSaga: PropTypes.func.isRequired,
  helloWorld: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HelloWorldSaga);
