import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fetchAsteroids, fetchDailyImage} from "../actions";


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { startDate: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
  }

  componentDidMount() {
    fetchDailyImage();
  }


  onInputChange(event) {
    this.setState({ startDate: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    // We need to go and fetch asteroid data
    this.props.fetchAsteroids(this.state.startDate);
    this.setState({ startDate: '' });
  }

  onImageClick(event){
    event.preventDefault();

  }

  render() {

    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Enter your date Ex. YYYY-MM-DD"
            className="form-control"
            value={this.state.startDate}
            onChange={this.onInputChange}
            />
            <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
                Submit
              </button>
              </span>
          </form>
          <div onClick={this.onImageClick}>img</div>
          <img src={this.props.url} onClick={this.onImageClick}></img>
      </div>

    );
  }
}

// function mapStateToProps(state, ownProps){
//   {}
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAsteroids }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);







// class AsteroidsSearch extends Component {
//   componentDidMount() {
//     this.props.fetchAsteroids();
//   }

//   render() {
//     return _.map(this.props.asteroids, asteroid => {
//       return (
//         <li className="list-group-item" key={asteroids.id}>
//           <Link to={`/asteroids/${asteroids.id}`}>
//             {asteroids.name}
//           </Link>
//         </li>
//       );
//     });
//   }
// }

// function mapStateToProps(state) {
//   return { asteroids: state.asteroids};
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchAsteroids }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AsteroidsSearch);
