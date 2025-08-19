import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Post from './components/Post';
import Tags from './components/Tags';
import Tag from './components/Tag';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tags" component={Tags} />
          <Route path="/tag/:tag_name" component={Tag} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
