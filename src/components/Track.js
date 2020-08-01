import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { BLACK_COLOR, GRAY_COLOR, WHITE_COLOR, SECONDARY_COLOR } from '../constants/colors';

function Track({ toggleModal, image, data, index, activeTrack, raceStarted }) {
  const [currentActiveIndex, setCurrentActiveIndex] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 11,
      paddingLeft: 12,
      color: SECONDARY_COLOR,
    },
    heading: {
      color: BLACK_COLOR,
      fontSize: 20,
      paddingLeft: 10,
    },
    card: {
      width: '96%',
      flex: 0,
      marginTop: 7,
      paddingTop: 10,
      paddingBottom: 15,
      backgroundColor: currentActiveIndex === activeTrack ? GRAY_COLOR:WHITE_COLOR,
      borderRadius: 20,
      borderColor: SECONDARY_COLOR,
      borderWidth: 0.5
    },
    logo: {
      width: 70,
      height: 50
    },
    row1: {
      width: '25%',
      paddingLeft: '3%',
    },
    row2: {
      width: '75%',
      paddingRight: 10,
    },
  });

  const changeModalState = (i) => {
    setCurrentActiveIndex(i);
    if (raceStarted && currentActiveIndex === index) {
    
        toggleModal(i);
    }
    else if (!raceStarted) {
      toggleModal(i);
    }
  }
  

  return (
    <TouchableOpacity onPress={() => changeModalState(index)}>
      <View style={styles.card}>
        <View style={styles.container}>
          <View style={styles.row1}>
            <Image source={image} style={styles.logo} />
          </View>
          <View style={styles.row2}>
            <Text style={styles.heading}>{data && data.heading}</Text>
            <Text style={styles.text}>{data && data.text}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}



export default Track;