import {Route} from 'react-router-dom';
import React from 'react';
import TodoListPage from './TodoListPage';
import './App.less';

const App = () => (
    <div className='app'>
        <Route exact path='/' component={TodoListPage}/>
    </div>
);

export default App;
