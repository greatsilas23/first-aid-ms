import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (

      <View
          style={{flexDirection: 'column', justifyContent: 'space-evenly',width: '50vw', height: '50vh', backgroundColor: 'yellow'}}
      >
        <Text>
            Login
        </Text>
        <View
            style={{width: '50vw', height: '10vh', backgroundColor: 'white'}}

        >
            <TextInput
                style={{width: '50vw', height: '10vh', backgroundColor: 'yellow'}}
                placeholder="user001"
            />
            <TextInput
                style={{width: '50vw', height: '10vh', backgroundColor: 'yellow'}}
                placeholder="****"
            />
            <Button
                style={{width: '5vw', height: '5vh', backgroundColor: 'grey'}}
                title="LOGIN"
            >
            </Button>
        </View>
      </View>


  );
}

const styles = StyleSheet.create({
    loginComponent: {
        backgroundColor: 'yellow',
	    width: '80vw',
	    height: '90vh'
    }
});
