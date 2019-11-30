import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

import {connect} from 'react-redux';

class CounterApp extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{justifyContent: 'space-around', flexDirection: 'row', width: 200}}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.increaseCounter()
                        }}>
                        <Text style={{fontSize: 20}}>Increase</Text>
                    </TouchableOpacity>

                    <Text style={{fontSize: 20}}>{this.props.counter}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.decreaseCounter()
                        }}>
                        <Text style={{fontSize: 20}}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', flex: 1, justifyContent: 'center'
    }

});

export default connect(mapStateToProps)(CounterApp)
