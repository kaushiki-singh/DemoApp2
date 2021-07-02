import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    card: {
        backgroundColor: 'white'
    },

    cardContent: {
        height: 120,
        width: 350,
        margin: 20,
        margin: 10,
        borderWidth: 2,
        backgroundColor: 'lightsalmon',
        borderColor: 'orangered',
        padding: 10,
        flexDirection: 'row'

    },

    section1: {
        flex: 1,
        margin: 10
    },
    section2: {
        flex: 3,
        flexDirection: 'row'
    },
    sec1: {
        flex: 1,
    },
    sec2: {
        flex: 1
    },
    text: {
        marginTop: 5,
        marginBottom: 5
    }
})
export default Styles;