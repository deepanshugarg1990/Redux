import React, {Component} from 'react';
import {StyleSheet,} from 'react-native';
import CounterApp from "./src/CounterApp";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREASE_COUNTER':
            return {counter: state.counter + 1};
        case 'DECREASE_COUNTER':
            return {counter: state.counter - 1};
    }
    return state;
};

const store = createStore(reducer);

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <CounterApp/>
            </Provider>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', flex: 1, justifyContent: 'center'
    }

});

export default App;
