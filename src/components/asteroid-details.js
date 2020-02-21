import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

class AsteroidDetails extends Component {
	renderComparisonImg(){

		const asteroidComparisons = [
				{id: 0, name: this.props.asteroid.name, img: 'https://mk0wisedecor0etkv5oa.kinstacdn.com/wp-content/uploads/2017/12/Arrow-Six-Pointing-down-Lettering-Art-17-N.jpg', meters: Math.floor(this.props.asteroid.estimated_diameter.meters.estimated_diameter_max), height: 90, width: 60},
				{id: 1, name:'Human', img: 'https://ak8.picdn.net/shutterstock/videos/25015148/thumb/1.jpg', meters: 1.7, height: 30, width: 30},
				{id: 2, name: 'Big Ben', img: 'https://i.pinimg.com/originals/f0/82/63/f0826326a169916dda48c726a1531a0c.jpg', meters: 96, height: 90, width: 65},
				{id: 3, name: 'Eiffel Tower', img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/illustration-of-the-eiffel-tower-on-a-white-background-artpics.jpg', meters: 299.9, height: 120, width: 80},
				{id: 4, name: 'Empire State Building', img: 'https://thumbs.dreamstime.com/b/empire-state-building-isolated-empire-state-building-isolated-white-background-d-render-147426371.jpg', meters: 381, height: 150, width:90},
				{id: 5, name: 'Burj Khalifa', img: 'https://atlas-content-cdn.pixelsquid.com/stock-images/burj-khalifa-tower-DxyWA22-600.jpg', meters: 829.6, height: 170, width:100}
		]

		const sortAsteroidComparisons = _.sortBy(asteroidComparisons, 'meters');

		return _.map(sortAsteroidComparisons, item => {
			return(
					<td key={item.id} style={{verticalAlign: "bottom"}}>
						<img
							width={item.width}
							height={item.height}
							src={item.img}
						/>
						<p>{item.name}</p>
					</td>
			)
		})

}

	render(){
		if(this.props.asteroid.is_potentially_hazardous_asteroid === false){
			return (
				<div style={{color: '#C0C0C0', backgroundImage: 'url(https://www.nasa.gov/images/content/523679main_pia13904-43_946-710.jpg)'}}>
					<h2>Congrats you are not going to die from an asteroid today!</h2>
					<h3>Details about this asteroid:</h3>
					<h4>Name: {this.props.asteroid.name}</h4>
					<h4>Estimated Diameter: {Math.floor(this.props.asteroid.estimated_diameter.meters.estimated_diameter_max)}m</h4>
					<h4>Closest Approach Date and Time: {this.props.asteroid.close_approach_data[0].close_approach_date_full}</h4>
					<h4>Orbiting Body: {this.props.asteroid.close_approach_data[0].orbiting_body}</h4>
					<table className="table table-borderless" style={{color: '#C0C0C0'}}>
						<thead>
							<tr>
								<th>Asteroid Comparison</th>
							</tr>
						</thead>
						<tbody>
							<tr>{this.renderComparisonImg()}</tr>
						</tbody>
					</table>
					<Link to='/asteroids'>Back to Asteroid List</Link>
				</div>
			)
		}else if(this.props.asteroid.is_potentially_hazardous_asteroid === true){
		// console.log(this.props.asteroid.name)
		return (
			<div style={{color: '#C0C0C0'}}>
				<h1>Today may be the day!</h1>
				<h3>We advise you email or text your family by: {this.props.asteroid.close_approach_data[0].close_approach_date_full}</h3>
				<h3>Below is a handy dandy survival guide for when mass panic breaks out.</h3>
				<a href="https://www.nytimes.com/2017/09/23/style/how-to-survive-the-apocalypse.html"> Apocalyse Survival Guide</a>
				<Link to='/asteroids'>Back to Asteroid List</Link>
				<img src='https://www.techexplorist.com/wp-content/uploads/2019/07/asteroid-explosion.jpg'/>
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

  return {
		asteroid: selectedAsteroid
	}
}



export default connect(mapStateToProps)(AsteroidDetails);
// AsteroidDetails
