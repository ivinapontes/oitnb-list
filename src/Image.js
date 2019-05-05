import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null
    };
  }
  componentDidMount() {
    fetch(`http://api.tvmaze.com/shows/170/episodes`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          img: data[0].image.medium
        });
        console.log(data);
      });
  }
  render() {
    return <img src={this.state.img} />;
  }
}

export default Image;
