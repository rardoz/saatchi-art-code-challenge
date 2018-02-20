import { connect } from "react-redux";
import {
  getArtwork,
  addFavorite,
  removeFavorite
} from "../redux/actions/artworks";
import ArtworksList from "../components/ArtworksList";

const mapStateToProps = state => ({
  isLoading: state.artworks.isLoading,
  items: state.artworks.items,
  favorites: state.artworks.favorites
});

const mapDispatchToProps = dispatch => ({
  addFavorite: id => dispatch(addFavorite(id)),
  removeFavorite: id => dispatch(removeFavorite(id)),
  getArtwork: dispatch(getArtwork())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksList);
