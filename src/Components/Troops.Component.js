import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTroopsAction } from '../actions/actions';

class GetTroopsComponent extends Component {

}

// const mapStateToProps = (state) => {
//   return 
// }

const mapDispatchToProps = {
  getTroopsAction,
}

export default connect(
  null,
  mapDispatchToProps,
)(GetTroopsComponent);
