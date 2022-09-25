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
          photoLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model-select-202209-6-1inch_AV1_FMT_WHH?wid=1280&hei=492&fmt=jpeg&qlt=90&.v=1660745125039',
          description: 'urso bonito',
          favorited: false,
          id: Date.now(),
          createdAt: new Date(),
        },
        {
          name: 'test',
          photoLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1617137945000',
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
          <div className="row m-5">
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
          <div key={index} className="col-12 col-sm-6 col-lg-6 row">
            <div className="col-12 col-lg-8 col">
              <img className="photo" src={photo.photoLink} alt={photo.name} title={photo.name}></img>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-column justify-content-between">
              <div>
                <p className="h2">{photo.name}</p>
                <div>
                  <p>Descrição: {photo.description}</p>
                </div>
                <p>Criada em: {photo.createdAt.toLocaleDateString('pt-BR')}</p>
              </div>
              <div>
                {photo.favorited ? (<p className="star">&#9733;</p>) : ''}
              </div>
            </div>
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
