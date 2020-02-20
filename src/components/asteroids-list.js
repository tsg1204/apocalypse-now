import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { fetchAsteroids } from "../actions";


class AsteroidsList extends Component {
  componentDidMount() {
    //const { id } = this.props.match.params;
    //console.log(this.props.match)
    //this.props.fetchAsteroids();
  }


  render() {

    const { asteroids } = this.props;
    console.log(asteroids)
    //if (!post) {
      //return <div>Loading...</div>;
    //}

    return (
    	<div>Asteroids List</div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //return { post: state.posts[ownProps.match.params.id] };
}

function mapDispatchToProps(dispatch) {
  //return bindActionCreators({fetchPost, deletePost}, dispatch);
}

export default AsteroidsList; //connect(mapStateToProps, mapDispatchToProps)(PostsShow);
