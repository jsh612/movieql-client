import { gql } from "apollo-boost";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  # query getMovieDetails($movieId: Int!) 는 오직 아폴로를 위한 구문으로써, 쿼리에 변수를 넣기 위함이다.
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      medium_cover_image
      title
      rating
    }
  }
`;
