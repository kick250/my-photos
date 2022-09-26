import React from "react";

export default class PhotoForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      favorited: false,
      photoLink: '',
      description: '',
      errors: []
    };
  }

  render() {
    return (
      <div>
        <p className="h2 text-center">Adicionar imagem</p>
        <div id="add-form" className="row justify-content-center align-items-center gap-3">
          {this.showErrors()}
          <div className="col-8">
            <input id="name" onInput={event => this.nameBind(event)} type={'text'} className="form-control text-center" placeholder="Nome"/>
          </div>
          <div className="col-12 col-sm-2 col-lg-2 form-check d-flex justify-content-center gap-2">
            <input id="favorited" className="form-check-input" onInput={event => this.favoritedBind(event)} type={'checkbox'}/>
            <label for="favorited" className="form-check-label">Favoritar</label>
          </div>
          <div className="col-12">
            <input id="photo-link" onInput={event => this.photoLinkBind(event)} type={'text'} className="form-control text-center" placeholder="link da imagem"/>
          </div>
          <div className="col-12">
            <textarea id="description" onInput={event => this.descriptinoBind(event)} className="form-control" cols={30} rows={5} placeholder="Descrição"></textarea>
          </div>
          <button className="btn btn-primary add-button col-6" onClick={() => this.save()} type="button">Salvar</button>
        </div>
      </div>
    );
  }

  nameBind({target}) {
    const name = target.value;
    this.setState({name});
  }
  favoritedBind() {
    const favorited = !this.state.favorited;
    this.setState({favorited});
  }
  photoLinkBind({target}) {
    const photoLink = target.value;
    this.setState({photoLink});
  }
  descriptinoBind({target}) {
    const description = target.value;
    this.setState({description});
  }

  showErrors() {
    const errors = this.state.errors;

    if (errors.length === 0)
      return (<div style={{display: 'none'}}></div>);

    return (
      errors.map((error, index) => {
        return (
          <div className="alert alert-danger" key={index}>
            {error}
          </div>
        )
      })
    )
  }

  save() {
    const photo = {
      name: this.state.name,
      photoLink: this.state.photoLink,
      description: this.state.description,
      favorited: this.state.favorited,
      id: Date.now(),
      createdAt: new Date(),
    };

    if (!this.validate(photo)) return;

    this.clearFields();

    this.props.onSavedPhoto(photo);
  }

  validate(photo) {
    const errors = [];

    if (photo.name.length <= 4)
      errors.push('O nome da imagem deve ter pelo menos 5 digitos.');

    if (photo.description.length <= 9)
      errors.push('A descrição da imagem deve ter pelo menos 10 digitos.');

    if (!this.verifyUrl(photo.photoLink))
      errors.push('A url da imagem deve ser valida');

    this.setState({errors});

    return (errors.length === 0);
  }

  verifyUrl(url) {
    // eslint-disable-next-line
    const r = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

    return r.test(url);
  }

  clearFields() {
    const inputs = document.querySelectorAll(
      '#name, #photo-link, #description'
    );

    inputs.forEach(input => { input.value = '' });
    return true;
  }
}