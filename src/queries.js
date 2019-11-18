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
  # 쿼리 이름지정 및 변수 사용
  # https://graphql.org/learn/queries/#operation-name
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
