import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './styles';


function FirstCard({ name, image, followers, following, publicRepo, type }) {
    let imageURL = { uri: image };
    return (
        <View style={Styles.card}>
            <View style={Styles.cardContent}>
                <View style={Styles.section1}>
                    <Image source={imageURL} style={{ height: 50, width: 50, borderRadius: 50, margin: 5 }} />
                    <Text style={Styles.text}>{name}</Text>
                </View>
                <View style={Styles.section2}>
                    <View style={Styles.sec1}>
                        <Text style={Styles.text}>Followers: {followers}</Text>
                        <Text style={Styles.text}>Public Repos: {publicRepo}</Text>
                    </View>
                    <View style={Styles.sec2}>
                        <Text style={Styles.text}>Following: {following}</Text>
                        <Text style={Styles.text}>Type: {type}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}



export default FirstCard