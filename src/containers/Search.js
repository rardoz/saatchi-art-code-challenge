import { connect } from "react-redux";
import { getArtwork } from "../redux/actions/artworks";
import Search from "../components/Search";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  getArtwork: (filter = "") => dispatch(getArtwork(filter.toLowerCase()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
