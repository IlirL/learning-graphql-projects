import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
// import logo from './logo.svg'
import {ApolloProvider} from 'react-apollo'
import Courses from './Courses'
import Course from './Course'


const client = new ApolloClient({
  uri:"https://vm8mjvrnv3.lp.gql.zone/graphql"
});


const App = ()=>(
  <ApolloProvider client = {client}>
    <div>
      <Courses />
    </div>
  </ApolloProvider>
)

export default App
