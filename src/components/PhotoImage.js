import React from "react";

export default class PhotoImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: props.photo
    }
  }

  render() {
    return (
      <img className="photo" src={this.state.photo.photoLink} alt={this.state.photo.name} title={this.state.photo.name}></img>
    )
  }
}