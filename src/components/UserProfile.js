import React, { Component } from "react";
import { connect } from "react-redux";
import Banner from "./Banner";

import agent from "../../agent";

const mapStateToProps = state => ({
  appName: state.common.appName

});

class UserProfile extends Component {
  componentWillMount() {
    this.props.onLoad(auth.current);
  }
  render() {
    return (
      <div className="User-profile">
        <Banner appName={this.props.appName} />
        <div className="container page">
          <div className="row">
          <img src={currentUser.img}/>
          <h2> {currentUser.username}</h2>
          <p>{currentUser.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);