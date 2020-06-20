import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Input, Card, Button } from 'react-native-elements';


import { POLICE } from '../..';

class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
			<Image source={ POLICE } style={styles.container}/>
			<View style={styles.textContainer}>
			<Text style={[styles.title, styles.text]}>
			Mask Watch
			</Text>
			<Text style={[styles.subtitle, styles.text]}>
			Who's watching the watchmen?
			</Text>
			</View>
			<View style={styles.formContainer}>
			<Card style={styles.card}>
			<Text style={{textAlign: "center"}}>Police Officer Information</Text>
			<View style={styles.buttonContainer}>
			<Button
			title="Upload image"
			type="clear"
			/>
			</View>
			<Input
			style={styles.input}
			placeholderTextColor="#5e6977"
			placeholder="Name" />
			<Input
			placeholderTextColor="#5e6977" placeholder="Badge No."/>
			<Input
			placeholderTextColor="#5e6977" placeholder="Precinct"/>
			<View style={styles.buttonContainer}>
			<Button
			buttonStyle={styles.button}
			title="Submit"/>
			</View>
			</Card>
			</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	margin: 20,
  },
  backgroundImage: {
    flex: 1,
    width: null,
	height: null,
    resizeMode: 'cover', // or 'stretch'
  },
  text: {
	textAlign: 'center',
	color: 'white',
	// fontFamily: 'Verdana'
  },
  title: {
	fontSize: 70,
	fontWeight: '500',
	marginBottom: 10
  },
  subtitle: {
	fontSize: 23,
	fontWeight: '600',
  },
  textContainer: {
	backgroundColor: 'rgba(0,0,0,0)',
	position: 'absolute',
    left: 0,
    right: 0,
    top: 150,
    bottom: 0,
  },
  formContainer: {
	backgroundColor: 'rgba(0,0,0,0)',
	position: 'absolute',
	left: 0,
    right: 0,
    bottom: 100,
  },
  card: {
	height: 1000
  },
  button: {
	backgroundColor: 'gray',
	width: 150,
	textAlign: "center"
  },
  buttonContainer: {
	justifyContent: 'center',
	alignItems: 'center',
  },
  buttonContainerLeft: {
	justifyContent: 'flex-start',
	alignItems: 'flex-start'
  }
});

export default Home;