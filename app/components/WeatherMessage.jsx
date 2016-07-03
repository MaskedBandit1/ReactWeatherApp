var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var location = this.props.location;
    var temperature = this.props.temperature;
    return(

        <h6>It is {temperature} degrees farenheit in {location}.</h6>
      );
  }
});

module.exports = WeatherMessage;
