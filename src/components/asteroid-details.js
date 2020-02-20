import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

class AsteroidDetails extends Component {


	render() {
		return (
			<div>Asteroid Details</div>
		)

	}

}

// function mapStateToProps() {
//   return {  };
// }


export default AsteroidDetails //connect(mapStateToProps)(AsteroidDetails);