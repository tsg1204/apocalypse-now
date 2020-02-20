import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fetchAsteroids } from "../actions";

class AsteroidsSearch extends Component {
  componentDidMount() {
    this.props.fetchAsteroids();
  }

  render() {
    return _.map(this.props.asteroids, post => {
      return (
        <li className="list-group-item" key={asteroids.id}>
          <Link to={`/asteroids/${asteroids.id}`}>
            {asteroids.name}
          </Link>
        </li>
      );
    });
  }
}

function mapStateToProps(state) {
  return { asteroids: state.asteroids};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAsteroids }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AsteroidsSearch);