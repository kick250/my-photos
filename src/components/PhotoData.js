import React from "react";

export default class PhotoData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: props.photo
    }
  }

  render() {
    return (
      <div>
        <p className="h2">{this.state.photo.name}</p>
        <div>
          <p>Descrição: {this.state.photo.description}</p>
        </div>
        <p>Criada em: {this.state.photo.createdAt.toLocaleDateString('pt-BR')}</p>
      </div>
    )
  }
}