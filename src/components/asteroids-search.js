import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import moment from 'moment'
import Calendar from 'ciqu-react-calendar'
import { fetchAsteroids, fetchDailyImage} from "../actions";
import AsteroidsList from "./asteroids-list";
import './styles.css';



class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { startDate: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.onChange = this.onChange.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
    this.disabledDate = this.disabledDate.bind(this);

  }

  componentDidMount() {
    this.props.fetchDailyImage();
  }

  onInputChange(event) {
    this.setState({ startDate: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //console.log(this.state)
    // We need to go and fetch asteroid data
    this.props.fetchAsteroids(this.state.startDate);
    this.props.history.push('/asteroids');
    this.setState({ startDate: '' });
  }

  onChange (value, inputValue) {
    //console.log(value.format('YYYY-MM-DD'))
    let dateToPass = value.format('YYYY-MM-DD')
    this.setState({ startDate: dateToPass })
    console.log('date to pass: ', dateToPass)
    this.props.fetchAsteroids(dateToPass);
    this.props.history.push('/asteroids');
  }

  onOpenChange (status){
    console.log('open status: ' + status)
  }

  disabledDate (currentDate, inputValue) {
    return false
  }


  render() {
    const { image } = this.props;

    if (!image) {
      return <div>Loading...</div>;
    }

    return (

      <div>
    {/* calendar added*/}
        <div className="container" id="calCont">
            <Calendar
                onChange={this.onChange}
                value={this.state.startDate}
                allowClear={true}
                disabled={false}
                placeholder={'please input date'}
                format={'YYYY-MM-DD'}
                onOpenChange={this.onOpenChange}
                disabledDate={this.disabledDate}
            />
          </div>
          <br />
          <br />
          <div className="container" style={{position: 'relative'}}>
            <div className="text-center" >
            <div style={{marginRight: '30px', marginLeft: '20px', position: 'absolute', color: '#C0C0C0', top: '8px', textAlign:"justify"}}>Today's Nasa Image: {this.props.image.explanation} </div>
              <img src={this.props.image.url} style={{width: '100%'}}>
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
