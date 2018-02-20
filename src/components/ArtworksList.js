import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ArtworkItem from "./ArtworkItem";

const Wrapper = styled.div`
  h1 {
    font-size: ${props => props.theme.fontSizes[6]}px;
    font-family: ${props => props.theme.fontFamilySerif};
    font-weight: normal;
  }
  p {
    font-style: italic;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    flex: 1 1 auto;
    width: ${props => props.theme.space[4]}%;
    margin-bottom: ${props => props.theme.space[4]}px;
    max-width: ${props => props.theme.space[4]}%;

    @media (max-width: ${props =>
        props.theme.maxWidth * props.theme.breakpoints[2] / 100}px) {
      max-width: 100%;
      width: 100%;
    }
  }
`;

export default class ArtworksList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.object),
    getArtwork: PropTypes.func,
    favorites: PropTypes.object,
    addFavorite: PropTypes.func,
    removeFavorite: PropTypes.func
  };

  static defaultProps = {
    isLoading: true,
    items: [],
    getArtwork: () => {},
    addFavorite: () => {},
    removeFavorite: () => {},
    favorites: {}
  };

  componentDidMount() {
    this.props.getArtwork();
  }

  render() {
    const { items, favorites, addFavorite, removeFavorite } = this.props;
    return (
      <Wrapper>
        <h1>Original Art for Sale</h1>
        {!items.length && <em>No results</em>}
        <List>
          {items.map(item => (
            <ArtworkItem
              {...item}
              liked={favorites[item.artId]}
              addFavorite={() => addFavorite(item.artId)}
              removeFavorite={() => removeFavorite(item.artId)}
              key={`artwork-item-${item.artId}`}
            />
          ))}
        </List>
      </Wrapper>
    );
  }
}
