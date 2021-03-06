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
				{id: 4, name: 'Empire State', img: 'https://thumbs.dreamstime.com/b/empire-state-building-isolated-empire-state-building-isolated-white-background-d-render-147426371.jpg', meters: 381, height: 150, width:90},
				{id: 5, name: 'Burj Khalifa', img: 'https://atlas-content-cdn.pixelsquid.com/stock-images/burj-khalifa-tower-DxyWA22-600.jpg', meters: 829.6, height: 170, width:100}
		]

		const sortAsteroidComparisons = _.sortBy(asteroidComparisons, 'meters');

		return _.map(sortAsteroidComparisons, item => {
			return(
					<td key={item.id} style={{verticalAlign: "bottom", width: "100px"}}>
						<img
							width={item.width}
							height={item.height}
							src={item.img}
						/>
						<p>{item.name}</p>
						<p>{item.meters}</p>
					</td>
			)
		})

}

	render(){

		if(this.props.asteroid.is_potentially_hazardous_asteroid === false){
			return (
				<div style={{color: '#C0C0C0', backgroundImage: 'url(https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/iss061e112503.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
					<h2>Congrats you are not going to die from an asteroid today!</h2>
					<h3>Details about this asteroid:</h3>
					<h4>Name: {this.props.asteroid.name}</h4>
					<h4>Estimated Diameter: {Math.floor(this.props.asteroid.estimated_diameter.meters.estimated_diameter_max)}m</h4>
					<h4>Closest Approach Date and Time: {this.props.asteroid.close_approach_data[0].close_approach_date_full}</h4>
					<h4>Orbiting Body: {this.props.asteroid.close_approach_data[0].orbiting_body}</h4>
					<table className="table table-borderless" style={{color: '#C0C0C0'}}>
						<thead>
							<tr>
								<th style={{color: '#FFA500'}}>Asteroid Comparison</th>
							</tr>
						</thead>
						<tbody>
							<tr>{this.renderComparisonImg()}</tr>
						</tbody>
					</table>
					<Link style={{fontSize:"20px", color: '#C0C0C0'}} to='/asteroids'>Back to Asteroid List</Link>
				</div>
			)
		}else if(this.props.asteroid.is_potentially_hazardous_asteroid === true){

		return (
			<div style={{color: '#C0C0C0'}}>
				<h1>Today may be the day!</h1>
				<h3>We advise you email or text your family by: {this.props.asteroid.close_approach_data[0].close_approach_date_full}</h3>
				<br />
				<h4>Check out this handy dandy survival guide for when mass panic breaks out.</h4>
				<a style={{color: '#FF0000', fontSize:"30px"}} href="https://www.nytimes.com/2017/09/23/style/how-to-survive-the-apocalypse.html"> Apocalyse Survival Guide</a>
				<br />
				<br />
				<Link to='/asteroids'>Back to Asteroid List</Link>
				<img src='https://www.techexplorist.com/wp-content/uploads/2019/07/asteroid-explosion.jpg'/>
			</div>
		)

		}
	}
}

function mapStateToProps(state, props ) {

	const selectedId = props.match.params.id

	const selectedAsteroid = state.asteroids.find(({id}) => id == selectedId);

  return {
		asteroid: selectedAsteroid
	}
}


export default connect(mapStateToProps)(AsteroidDetails);
