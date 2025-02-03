import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img src={this.props.ImgUrl} style={{ height: this.props.imgHeight }} alt={this.props.alt} />;
  }
}

export default ImageComponent;
