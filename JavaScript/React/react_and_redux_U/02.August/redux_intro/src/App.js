import React from 'react';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';


import {createStore} from 'redux';
import { Provider } from 'react-redux'
import rootReduce from './reducers/index.js'
const store = createStore(rootReduce);
console.log('store: ',store)
class App extends React.Component {
    render(){
        return (
            
                
                <Provider store={store}>
                    <div>
                        <h1>React App 621</h1>
                        <BookList />
                        <BookDetail />
                    </div>
                </Provider>
            
        )
    }
}

export default App;