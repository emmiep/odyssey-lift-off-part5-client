import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const isProduction = process.env.NODE_ENV === 'production';
const serverUri = isProduction ? 'https://emmiep-server-catstronauts.herokuapp.com/' : 'http://localhost:4000/';

const client = new ApolloClient({
  uri: serverUri,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
