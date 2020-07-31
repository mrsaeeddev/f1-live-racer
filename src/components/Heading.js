import React from 'react';
import { Text, StyleSheet } from 'react-native'

function Heading() {
  
  const styles = StyleSheet.create({
    headingText: {
      fontSize: 30,
      fontWeight: "normal",
      textAlign: "center"
    }
  });

  return <Text style={styles.headingText}>F1 Live Racer</Text>;
}

export default Heading;