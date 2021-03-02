import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            titleText: "",
            authorText: "",
            storyText: ""
        }
    }
    render() {
      return (
        <View style={styles.container}>
          <Header
            backgroundColor={'#80d4ff'}
            centerComponent={{
              text: 'Story Hub',
              style: { color: '#fff', fontSize: 20 },
            }}
          />
           <TextInput 
            style = {styles.inputBox} 
            placeholder = "Story Title" 
            value = {this.state.titleText} 
            onChangeText = {(text) => {
                this.setState({
                    titleText: text
                });
            }}/>

            <TextInput 
            style = {styles.inputBox} 
            placeholder = "Author" 
            value = {this.state.authorText} 
            onChangeText = {(text) => {
                this.setState({
                    authorText: text
                });
            }}/>

            <TextInput 
            style = {styles.inputBox} 
            placeholder = "Write your story" 
            value = {this.state.titleText} 
            onChangeText = {(text) => {
                this.setState({
                    titleText: text
                });
            }}
            multiline = {true}/>

            <TouchableOpacity style = {styles.submitButton}>
                <Text style = {styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
    },
    submitButton: {
        backgroundColor: "#789efc",
        width: 100,
        height: 50
    },
    submitButtonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        padding: 10
    }
  });