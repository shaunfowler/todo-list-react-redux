import {Route} from 'react-router-dom';
import React from 'react';
import Header from './Header';
import TodoListPage from './TodoListPage';
import About from './About';

const App = () => (
    <div>
        <Header/>
        <Route exact path='/' component={TodoListPage}/>
        <Route path='/about' component={About}/>
    </div>
);

export default App;
