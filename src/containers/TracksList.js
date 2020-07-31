import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native'
import Track from '../components/Track';
import ModalComponent from '../components/Modal';
import Tap from '../components/Tap';

const abudhabi_track = require('../assets/abu_dhabi.png')
const shanghai_track = require('../assets/shanghai.png')
const monte_track = require('../assets/monte_carlo.png')

function TracksList() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(null);
    const [raceStarted, setRaceStarted] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const styles = StyleSheet.create({
        trackListContainer: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        textContainer: {
            marginTop: 50,
            marginLeft: 20,
            marginRight: 20,
            textAlign:'center',
            fontSize: 15,
        }
    });

    const data = [{
        heading: "Monte Carlo, Monaco",
        text: "A fast paced track with lots of competition. You must be fast but also avoid crashing",
        currentPlayers: 0,
        totalPlayers: 8,
    },
    {
        heading: "Shanghai, China",
        text: "Lots of straight sections to test the limits of your car. You will burn a lot of fuel and change lots of tiers",
        currentPlayers: 0,
        totalPlayers: 2,
    },
    {
        heading: "Abu Dhabi, UAE",
        text: "Test your driving abilites with this short but fast track. Play 1-on-1 with another player and prove your skills",
        currentPlayers: 1,
        totalPlayers: 2,
    }];

    const toggleModal = (i) => {
        Number.isInteger(i) && setIndex(i);
        setModalVisible(!isModalVisible)
    };

    const startRace = (i) => {
        setActiveIndex(i);
        setRaceStarted(true);
    }

    const exitRace = () => {
        setRaceStarted(false);
        toggleModal();
    }

    return (
        <View style={styles.trackListContainer}>
            {console.log(activeIndex,index,raceStarted,isModalVisible)}
            {raceStarted ? (activeIndex === index ? <ModalComponent data={data[index]} index={index} isVisible={isModalVisible} toggleModal={toggleModal} startRace={startRace} exitRace={exitRace} raceStarted={raceStarted} /> : Alert.alert('You are already in a track!')) : <ModalComponent data={data[index]} index={index} isVisible={isModalVisible} toggleModal={toggleModal} startRace={startRace} exitRace={exitRace} raceStarted={raceStarted} />}
            <Track toggleModal={toggleModal} image={abudhabi_track} data={data[0]} index={0} activeTrack={activeIndex} isVisible={isModalVisible}/>
            <Track toggleModal={toggleModal} image={shanghai_track} data={data[1]} index={1} activeTrack={activeIndex} isVisible={isModalVisible} />
            <Track toggleModal={toggleModal} image={monte_track} data={data[2]} index={2} activeTrack={activeIndex} isVisible={isModalVisible} />
            {raceStarted ? <Text style={styles.textContainer}>You are already competing in a track. Exit that track to join some other track!</Text>:<Tap />}
        </View>
        );
}

export default TracksList;