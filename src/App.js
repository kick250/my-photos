import React from "react";
import PhotoForm from "./components/PhotoForm.js";
import "./app.css";
import PhotoImage from "./components/PhotoImage.js";
import PhotoData from "./components/PhotoData.js";

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      justFavorite: false,
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
          name: 'test 2',
          photoLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1617137945000',
          description: 'urso bonito',
          favorited: true,
          id: Date.now() + 40,
          createdAt: new Date(),
        },
        {
          name: 'test 2',
          photoLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1617137945000',
          description: 'urso bonito',
          favorited: true,
          id: Date.now() + 433333,
          createdAt: new Date(),
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <p className="h1 py-3 text-center header">My Photos</p>
        <div className="mx-3">
          <PhotoForm onSavedPhoto={photo => this.createPhoto(photo)}/>
          <div className="row m-5 gap-3 justify-content-center justify-content-sm-between">
            <div className="col-12 h2 text-center mb-0">Imagens adicionadas</div>
            <div className="d-flex justify-content-center gap-2">
              <input onInput={() => this.showJustFavorite()} type="checkbox"/>Favoritos
            </div>
            {this.showPhotosList()}
          </div>
        </div>
      </div>
    );
  }

  showPhotosList() {
    let photos = this.state.photos

    if (photos.length === 0)
      return (<div className="h2 text-center">Nenhuma imagem adicionada</div>);

    if (this.state.justFavorite)
      photos = photos.filter(photo => { return photo.favorited });

    if (photos.length === 0)
      return (<div className="h2 text-center">Nenhuma imagem favoritava</div>);

    return (
      photos.map((photo) => {
        return (
          <div key={photo.id} className="photo-box col-12 col-sm-6 col-lg-6 row">
            <div className="col-12 col-lg-8 col">
              <PhotoImage photo={photo}/>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-column justify-content-between">
              <PhotoData photo={photo}/>
              <div className="d-flex align-items-center gap-2 justify-content-end">
                <button onClick={() => this.deletePhoto(photo)} className="btn btn-danger">&#x1F5D1;</button>
                {photo.favorited ? (<button onClick={() => this.favorite(photo)} className="star btn">&#9733;</button>) : (<button onClick={() => this.favorite(photo)} className="star btn">&#9734;</button>)}
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

  deletePhoto(photo) {
    let photos = this.state.photos;
    photos = photos.filter(statePhoto => {
      return (photo.id !== statePhoto.id)
    });
    this.setState({photos});
  }

  favorite(photo) {
    photo.favorited = !photo.favorited;
    this.save(photo);
  }

  showJustFavorite() {
    const justFavorite = !this.state.justFavorite;
    this.setState({justFavorite});
  }

  save(photo) {
    let photos = this.state.photos;
    photos = photos.map(statePhoto => {
      if (photo.id === statePhoto.id)
        return photo;

      return statePhoto;

    });
    this.setState({photos});
  }
}

export default App;
