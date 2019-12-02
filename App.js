import React, {Component} from 'react';
import TodoApp from "./src/TodoApp";
import store from "./src/store"
import {Provider} from 'react-redux';
import {StyleSheet} from "react-native";

class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <TodoApp/>
            </Provider>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});


export default App;
