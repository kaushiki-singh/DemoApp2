import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


function FirstCard({name, image, followers, following, publicRepo, type}) {
    let imageURL ={uri: image};
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.section1}>
                <Image source={imageURL} style = {{height: 50, width: 50, borderRadius:50,  margin: 5 }}/>
                <Text style={styles.text}>{name}</Text>
                </View>
                <View style={styles.section2}>
                   <View style={styles.sec1}>
                   <Text style={styles.text}>Followers: {followers}</Text>
                   <Text style={styles.text}>Public Repos: {publicRepo}</Text>
                   </View>
                   <View style={styles.sec2}>
                   <Text style={styles.text}>Following: {following}</Text>                
                   <Text style={styles.text}>Type: {type}</Text>
                   </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        backgroundColor:'white'
    },
    
    cardContent : {
        height: 120,
        width: 350,
        margin: 20,
        margin: 10,
        borderWidth: 2,
        backgroundColor: 'lightsalmon',
        borderColor: 'orangered',
        padding: 10,
        flexDirection:'row'

    },
    
    section1: {
        flex: 1,
        margin: 10
    },
    section2: {
        flex: 3,
        flexDirection: 'row'
    },
    sec1:{
        flex: 1,
    },
    sec2:{
        flex:1
    },
    text:{
        marginTop: 5,
        marginBottom: 5
    }
})

export default FirstCard