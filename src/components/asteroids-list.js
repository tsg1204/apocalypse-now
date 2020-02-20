import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { fetchAsteroids } from "../actions";

class AsteroidsList extends Component {

	renderList() {
		console.log('from renderList')
		 return _.map(this.props.asteroids, ast => {
	      return (
	        <li className="list-group-item" key={ast.id}>
	            
				<Link to={`/asteroids/${ast.id}`}>
					{ast.name} 
					Orbiting body: {ast.close_approach_data[0].orbiting_body}
					 Is potentially hazardous asteroid: 
					{ast.is_potentially_hazardous_asteroid ? ' Yes' : ' No'}
				</Link>

	        </li>
	      );
	    });
	}

  render() {

    return (
    	<div><h4>Asteroids List</h4>
	        <ul className="list-group">
	          {this.renderList()}
	        </ul>
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