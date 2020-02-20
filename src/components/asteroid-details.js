import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

class AsteroidDetails extends Component {
	renderImg(){
		const size = this.props.asteroid.estimated_diameter.meters.estimated_diameter_max
		return(
			
		)
	}

	render(){
		if(this.props.asteroid.is_potentially_hazardous_asteroid === false){
			return (
				<div>
					<h1>CONGRATS!</h1>
					<h1>Details</h1>
					<h2>Name: {this.props.asteroid.name}</h2>
					<h3>Estimated Diameter: {this.props.asteroid.estimated_diameter.meters.estimated_diameter_max}</h3>
					<h3>Close Approach Date: {this.props.asteroid.close_approach_data[0].close_approach_date_full}</h3>
					<h3>Orbiting Body: {this.props.asteroid.close_approach_data[0].orbiting_body}</h3>
					<h2>{this.renderImg()}</h2>
				</div>
			)
		}else if(this.props.asteroid.is_potentially_hazardous_asteroid === true){
		// console.log(this.props.asteroid.name)
		return (
			<div>
				<h1>You are going to die!</h1>
				<a href="https://www.nytimes.com/2017/09/23/style/how-to-survive-the-apocalypse.html"> Guide to Apocalyse </a>
		 		<h1>Email your family! by</h1>
				<h1>Details</h1>
				<h2>Name: {this.props.asteroid.name}</h2>
				<h3>Estimated Diameter: {this.props.asteroid.estimated_diameter.meters.estimated_diameter_max}</h3>
				<h3>Close Approach Date: {this.props.asteroid.close_approach_data[0].close_approach_date_full}</h3>
				<h3>Orbiting Body: {this.props.asteroid.close_approach_data[0].orbiting_body}</h3>
			</div>
		)

		}
	}
}

function mapStateToProps(state, props) {
	// console.log(state)
	// console.log(props.match.params.id)
	const seclectedId = props.match.params.id
	const selectedAsteroid = _.find(state, { id: seclectedId });
	console.log(selectedAsteroid.is_potentially_hazardous_asteroid)

  return {
		asteroid: selectedAsteroid
	}
}


export default connect(mapStateToProps)(AsteroidDetails);
// AsteroidDetails
