var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');

var Weather = React.createClass({

  getInitialState: function(){
    return {
      isLoading: false
    }
  },

  handleSearch: function(location){
    var that = this;

    this.setState({isLoading: true});
    openweathermap.getTemp(location).then( function(temperature){
      that.setState({
        location: location,
        temperature: temperature,
        isLoading: false
      });
    },
    function(errorMessage){
      that.setState({isLoading: false});
      alert(errorMessage);
    });

  },

  render: function(){
    var {isLoading,temperature,location} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching Weather...</h3>;
      }
      else if(temperature && location){
        return <WeatherMessage location={location} temperature={temperature}/>;
      }
    }

    return(
      <div>
        <h5>Weather Component</h5>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
