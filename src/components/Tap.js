import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
const tap_logo = require('../assets/tap-logo.png')

function Tap() {

  const styles = StyleSheet.create({
    tapLogo: {
      width: 70,
      height: 50
    },
    tapContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 100
    }
  });

  return (<View style={styles.tapContainer}>
            <Image source={tap_logo} style={styles.tapLogo} />
            <Text>Tap on one of the above tracks to start the race!</Text>
        </View>);
}

export default Tap;