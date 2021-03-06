import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from 'react-apollo';
import { LocaleProvider } from 'antd'


const client = new ApolloClient({
  uri: "/api"
});

client
  .query({
    query: gql`
      {
        getTodos {
          id
          title
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
