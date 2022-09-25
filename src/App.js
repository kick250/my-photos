import React from "react";
import PhotoForm from "./components/PhotoForm.js";

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  render() {
    return (
      <div>
        <p className="h1 my-3 text-center">My Photos</p>
        <PhotoForm/>
      </div>
    );
  }
}

export default App;
