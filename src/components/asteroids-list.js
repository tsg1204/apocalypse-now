import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import _ from "lodash";

class AsteroidsList extends Component {

	renderList() {

		//sort data by closest missed distance
		const compareFunc = (a, b) => {
			const milesA = Math.round(a.close_approach_data[0].miss_distance.miles);
			const milesB = Math.round(b.close_approach_data[0].miss_distance.miles);

			let comparison = 0;
			if (milesA > milesB) {
				comparison = 1;
			} else if (milesA < milesB) {
				comparison = -1;
			}
			return comparison;
		}

		this.props.asteroids.sort(compareFunc);

		return _.map(this.props.asteroids, ast => {
			if (ast.is_potentially_hazardous_asteroid) console.log('BOOM!!!')
			const miles = ast.close_approach_data[0].miss_distance.miles
			const formatedValue = Math.round(miles)
			return (
				<tr key={ast.id}>
				<td key={ast.id} style={{color: '#C0C0C0'}}>
					<Link to={`/asteroids/${ast.id}`}>
						{ast.name}
					</Link>
				</td>
				<td style={{color: '#C0C0C0', paddingLeft: '60px'}}>
					{ast.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
				</td>
				<td style={{color: '#C0C0C0', paddingLeft: '60px'}}>
					{formatedValue.toLocaleString()} mi
				</td>
			</tr>
			);
	    });
	}

  render() {
    return (
    	<div style={{backgroundImage: 'url(https://images-assets.nasa.gov/image/PIA09653/PIA09653~small.jpg)' }}>
	        <table style={{margin: 'auto'}}>
	        	<tbody>
	        		<tr>
	        			<td style={{color: '#C0C0C0'}}>Asteroid Name</td>
	        			<td style={{color: '#C0C0C0', paddingLeft: '60px'}}>Is potentially hazardous asteroid?</td>
	        			<td style={{color: '#C0C0C0', paddingLeft: '60px'}}>Missed by</td>
	        		</tr>
	        		{this.renderList()}
	        	</tbody>
	        </table>
					<br/>
					<br/>
					<Link style={{marginLeft: '10px', color: '#C0C0C0', fontSize:"20px"}} to='/'>Back to Home Page</Link>
					<br/>
					<br/>
					<br/>
					<br/>
    	</div>
    );
  }
}

function mapStateToProps( { asteroids } ) {
  return { asteroids };
}


export default connect(mapStateToProps)(AsteroidsList);
