import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton'
import Modal from 'react-native-modal';
import { WHITE_COLOR, GRAY_COLOR } from '../constants/colors';

function ModalComponent({ data, isVisible, toggleModal, startRace, index, raceStarted, exitRace }) {
  const [playerCount, setPlayerCount] = useState(data && data.currentPlayers);

  useEffect(() => {
    if (data !== undefined) { setPlayerCount(data.currentPlayers) }
  }, [data && data.currentPlayers])

  useEffect(() => {
    if (raceStarted === true) {
      setPlayerCount(playerCount + 1)
    }
  }, [raceStarted])

  const styles = StyleSheet.create({
    ModalComponent: {
      flex: 1,
    },
    ModalChildContainer: {
      flex: 1,
      backgroundColor: WHITE_COLOR,
      borderRadius: 15,
      marginTop: "10%",
      marginBottom: "2%",
    },
    centerContainer: {
      alignItems: 'center',
      paddingBottom: 20,
    },
    modalValues: {
      color: GRAY_COLOR,
      fontSize: 18
    },
    horizontalRule: {
      borderBottomColor: GRAY_COLOR,
      borderBottomWidth: 1,
    },
    modalValuesContainer: {
      width: '97%',
      alignSelf: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 20
    },
    heading: {
      justifyContent: 'center',
      alignContent:'center',
      fontSize: 20,
    }
  });

  const leaveRace = () => {
    setPlayerCount(data.currentPlayers);
    exitRace();
  }

  return (
    <View style={styles.ModalComponent}>
      <Modal hideModalContentWhileAnimating={true} useNativeDriver={false} isVisible={isVisible}>
        <View style={styles.ModalChildContainer}>
          <View style={styles.centerContainer}>
          </View>
          {data &&
            (<View style={styles.modalValuesContainer}>
              <Text style={styles.heading}>{data.heading}</Text>
              <Text style={styles.modalValues}>{data.text}</Text>
              <Text style={styles.heading}>{data && raceStarted ? playerCount : data.currentPlayers}/{data && data.totalPlayers}</Text>
              <View style={styles.horizontalRule} /></View>)
          }
          <View style={styles.centerContainer}>
            {raceStarted ? data && playerCount === data.totalPlayers ? <Text>Race Started</Text> : <Text>Waiting for other drivers to join!</Text> : null}
            {!raceStarted && <PrimaryButton text="Start Race" nextHandler={() => startRace(index)} />}
            <PrimaryButton text="Exit Race" nextHandler={() => leaveRace()} />
            <PrimaryButton text="Back " nextHandler={() => toggleModal()} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalComponent;
