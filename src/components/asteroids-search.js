import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fetchAsteroids, fetchDailyImage} from "../actions";


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { startDate: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  componentDidMount() {
    this.props.fetchDailyImage();
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


  render() {
    const { image } = this.props;

    if (!image) {
      return <div>Loading...</div>;
    }

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
          <div className="container">
            <div className="top-right">Today's Nasa Image: {this.props.image.explanation}
              <img src={this.props.image.url}>
              </img>
            </div>
          </div>
      </div>

    );
  }
}

function mapStateToProps ({image}){
  return {image}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAsteroids, fetchDailyImage }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
