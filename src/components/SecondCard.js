import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SecondCard({repoName, languages}) {
    
    return (
        <View style={styles.card}>
            <View style={styles.section}>
                <View style={styles.section1}>
                    <Text>{repoName}</Text>
                </View>
                <View style={styles.section2}>
                    <Text>{languages}</Text>
                    <Text>hi</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
    },
    section: {
        height: 120,
        width: 350,
        margin: 20,
        margin: 10,
        borderWidth: 2,
        borderColor: 'grey',
        flexDirection:'column',
        backgroundColor:'lightgrey'
    },
    section1:{
        flex:1,
    },
    section2:{
        flex:1,
    }
})

export default SecondCard
