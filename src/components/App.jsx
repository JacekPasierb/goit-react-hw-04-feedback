import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import css from "../styles.module.css";

import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { fetchImages } from "./API/fetchImage";
import PropTypes from "prop-types";

export default class App extends Component {
  state = {
    images: [],
    isLoad: false,
    isModalOpen: false,
    page: 1,
    wordkey: "",
    modalAlt: "default",
    modalImg: "default",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoad: true });
    const wordkey = e.target.elements.searchInput;
    if (wordkey.value.trim() === "") {
      this.setState({ isLoad: false, images: [] });
      return;
    }
    const response = await fetchImages(wordkey.value);
    this.setState({
      images: response,
      isLoad: false,
      page: 1,
      wordkey: wordkey.value,
    });
  };
  handleloadMore = async () => {
    this.setState({ isLoad: true });
    const response = await fetchImages(this.state.wordkey, this.state.page + 1);
    this.setState({
      images: [...this.state.images, ...response],
      isLoad: false,
      page: this.state.page + 1,
    });
  };
  handleImageOpen = (e) => {
    this.setState({
      isModalOpen: true,
      modalAlt: e.target.alt,
      modalImg: e.target.name,
    });
  };
  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
      modalImg: "",
      modalAlt: "",
    });
  };
  handleEscapeKey = (e) => {
    if (e.code === "Escape") {
      this.handleModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleEscapeKey);
  }
  render() {
    const { images, isLoad, isModalOpen, modalAlt, modalImg } = this.state;
    return (
      <div className={css.box}>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoad && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.handleImageOpen} />
        )}
        {images.length >= 12 && isLoad && <Loader />}
        {images.length >= 12 && !isLoad && (
          <Button onClick={this.handleloadMore} />
        )}

        {isModalOpen && (
          <Modal src={modalImg} alt={modalAlt} close={this.handleModalClose} />
        )}
      </div>
    );
  }
}

App.propTypes = {
  images: PropTypes.array,
  isLoad: PropTypes.bool,
  isModalOpen: PropTypes.bool,
  page: PropTypes.number,
  wordkey: PropTypes.string,
  modalAlt: PropTypes.string,
  modalImg: PropTypes.string,
};
