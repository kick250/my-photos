import React from "react";
import PhotoForm from "./components/PhotoForm.js";
import "./app.css";

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      photos: [
        {
          name: 'test',
          photoLink: 'https://www.eusemfronteiras.com.br/wp-content/uploads/2021/05/pexels-rasmus-svinding-35435-810x537.jpg',
          description: 'urso bonito',
          favorited: false,
          id: Date.now(),
          createdAt: new Date(),
        },
        {
          name: 'test',
          photoLink: 'https://static3.depositphotos.com/1000608/113/i/600/depositphotos_1131732-stock-photo-brown-bear-and-a-bird.jpg',
          description: 'urso bonito',
          favorited: true,
          id: Date.now(),
          createdAt: new Date(),
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <p className="h1 py-3 text-center header">My Photos</p>
        <div className="mx-3">
          <PhotoForm onSavedPhoto={photo => this.createPhoto(photo)}/>
          <div className="row">
            {this.showPhotosList()}
          </div>
        </div>
      </div>
    );
  }

  showPhotosList() {
    const photos = this.state.photos

    if (photos.length === 0)
      return (<div style={{display: 'none'}}></div>);

    return (
      photos.map((photo, index) => {
        return (
          <div key={index} className="col-12 row">

          </div>
        )
      })
    );
  }

  createPhoto(photo) {
    let photos = this.state.photos;
    photos.push(
      photo
    );
    this.setState({photos});
  }
}

export default App;
