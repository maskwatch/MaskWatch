import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Input, Card, Button } from 'react-native-elements';

import DatePicker from 'react-native-datepicker'
import ImagePicker from 'react-native-image-picker';
// import Permissions from 'react-native-permissions';

import { POLICE } from '../..';

// _requestPermission = () => {
//     Permissions.request('photo').then(response => {
//       // Returns once the user has chosen to 'allow' or to 'not allow' access
//       // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
//       this.setState({photoPermission: response});
//     });
//     Permissions.request('camera').then(response => {
//       // Returns once the user has chosen to 'allow' or to 'not allow' access
//       // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
//       this.setState({photoPermission: response});
//     });
//   };

function getCurrentDate () {
	var date = new Date().getDate();
	var month = new Date().getMonth() + 1;
	var year = new Date().getFullYear();
	return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
}

const options = {
	title: 'Select Avatar',
	customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
	storageOptions: {
	  skipBackup: true,
	  path: 'images',
	},
  };

class Home extends Component {

	constructor(props){
		super(props)
		const date = getCurrentDate()
		this.state = {
			date: date,
			filePath: {},
		};
	}
	chooseFile = () => {
		var options = {
			title: 'Select Image',
			customButtons: [
			{ name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
			],
			storageOptions: {
			skipBackup: true,
			path: 'images',
			},
		};
		ImagePicker.showImagePicker(options, response => {
			console.log('Response = ', response);

			if (response.didCancel) {
			console.log('User cancelled image picker');
			} else if (response.error) {
			console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
			console.log('User tapped custom button: ', response.customButton);
			alert(response.customButton);
			} else {
			let source = response;
			// You can also display the image using data:
			// let source = { uri: 'data:image/jpeg;base64,' + response.data };
			this.setState({
				filePath: source,
			});
			}
		});
	};

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

			<Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 250, height: 250 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.filePath.uri}
          </Text>
          <Button title="Choose File" onPress={this.chooseFile.bind(this)} />

			</View>
			<Input
			style={styles.input}
			placeholderTextColor="#5e6977"
			placeholder="Name" />
			<Input
			placeholderTextColor="#5e6977" placeholder="Badge No."/>
			<Input
			placeholderTextColor="#5e6977" placeholder="Precinct"/>

		<DatePicker
        style={{width: 200}}
		date={this.state.date}
        mode="date"
        placeholder="date"
        format="YYYY-MM-DD"
        // minDate="2020-01-01"
        maxDate={this.state.date}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
		  }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />



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