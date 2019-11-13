import ApolloClient from "apollo-boost";

//data가 있는 곳의 url
const client = new ApolloClient({
  // uri: "https://movieql-osezlvyqsg.now.sh"
  uri: "http://localhost:4000/"
});

export default client;
