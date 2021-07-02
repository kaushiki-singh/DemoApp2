import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './styles';
import { getLanguageListRequest } from '../../actions/languageAction';

function SecondCard({ repoName, loginName }) {

    const dispatch = useDispatch();
    const MyLanguageData = useSelector((state) => {
        console.log("data", state.language.data);
        return state.language.data;
    });

    useEffect(() => {
        dispatch(getLanguageListRequest(loginName, repoName));
    }, [])

    return (
        <View style={Styles.card}>
            <View style={Styles.section}>
                <View style={Styles.section1}>
                    <Text>{repoName}</Text>
                </View>
                <View style={Styles.section2}>
                    <Text>{MyLanguageData}</Text>
                </View>
            </View>
        </View>
    )
}


export default SecondCard
