import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>시작</h2>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
