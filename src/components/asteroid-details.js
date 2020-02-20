import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

class AsteroidDetails extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		//???
	}

	render() {

	}

}

function mapStateToProps(state, ownProps) {
  return { post: state.asteroids[ownProps.match.params.id] };
}


export default connect(mapStateToProps)(AsteroidDetails);