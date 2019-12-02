import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {connect} from 'react-redux';
import { addTodo } from '../actions'
class AddTodo extends Component {

    state = {
        text: ''
    };

    addTodo = (text) => {
        //redux store
        this.props.dispatch(addTodo(text))
        this.setState({text: ''})

    };

    render() {
        return (
            <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10,}}>
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                    placeholder="Example create new video"
                    style={{
                        borderWidth: 1,
                        borderColor: '#f2f2e1',
                        backgroundColor: "#eaeaea",
                        height: 50,
                        flex: 1,
                        padding: 5
                    }}/>

                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <View style={{height: 50, backgroundColor: "#eaeaea"}}>
                        <Text style={{fontSize: 20, margin: 10}}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center', flex: 1, justifyContent: 'center'
    }

});

export default connect()(AddTodo)
