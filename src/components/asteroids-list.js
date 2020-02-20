import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { fetchAsteroids } from "../actions";


class AsteroidsList extends Component {
	constructor() {
		super()


	}
	

	renderList() {
		console.log('from renderList')
		 return _.map(this.props.asteroids, ast => {
	      return (
	      		<tr key={ast.id}>
	        	<td key={ast.id}>	            
					<Link to={`/asteroids/${ast.id}`}>
						{ast.name}	
					</Link>
				</td>
				<td>
					{ast.is_potentially_hazardous_asteroid ? '      Yes' : '     No'}
				</td>
				</tr>
	      );
	    });
	}

  render() {
    return (
    	<div><h4>Asteroids List</h4>
	        {/*<ul className="list-group">
	        	<li className="list-group-item">Name       | Is potentially hazardous asteroid?</li>
	          {this.renderList()}
	        </ul>*/}
	        <table >
	        	<tbody>
	        		<tr>
	        			<td>Name</td>
	        			<td>Is potentially hazardous asteroid?</td>
	        		</tr>
	        		{this.renderList()}
	        	</tbody>
	        </table>
    	</div>

    );
  }
}

function mapStateToProps(  asteroids ) {
  return { asteroids };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPost, deletePost}, dispatch);
// }

export default connect(mapStateToProps)(AsteroidsList); //connect(mapStateToProps, mapDispatchToProps)(PostsShow);

