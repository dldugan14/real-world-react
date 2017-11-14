import React, { Component } from "react";
import { connect } from "react-redux";
import MainView from "./MainView";
import Banner from "./Banner";

import agent from "../../agent";

//const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.appName
  
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
});

class Home extends Component {
  componentWillMount() {
    this.props.onLoad(agent.Articles.all());
  }
  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <MainView props={this.props.articles} />
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);