import React from 'react';
import { Text, StyleSheet, View } from 'react-native'
import TracksList from '../containers/TracksList';
import Heading from '../components/Heading';

function TrackScreen() {
  const styles = StyleSheet.create({
    headingText: {
      fontSize: 30,
      fontWeight: "normal",
      textAlign: "center"
    }
  });

  return (
    <View><Heading /><TracksList /></View>
  );
}

export default TrackScreen;