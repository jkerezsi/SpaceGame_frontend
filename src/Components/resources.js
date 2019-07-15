import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResources } from '../actions/actions';

class ShowResources extends Component {
  componentWillMount() {
    this.refreshInfo();
  }

  refreshInfo = () => {
    // eslint-disable-next-line react/prop-types
    const { getResources } = this.props;
    const localStorageToken = localStorage.getItem('TOKEN');
    return getResources(localStorageToken);
  }


  render() {
    // const { resources } = this.props;
    return (
      <div className="resources">
        <p>{0}</p>
        <p>{0}</p>
      </div>
    );
  }
}

/* const mapStateToProps = state => ({
  resources: state.gotResources.,
}); */

const mapDispatchToProps = {
  getResources,
};


export default connect(
  null,
  mapDispatchToProps,
)(ShowResources);
