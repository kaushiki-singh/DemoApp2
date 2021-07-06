import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import Styles from './styles';
import { getLanguageListRequest } from '../../actions/languageAction';

function SecondCard({ repoName, loginName, nodeId }) {

    const dispatch = useDispatch();
    const MyLanguageData = useSelector((state) => {
        return state.language.data;
    });
    const currentRepData = MyLanguageData?.[repoName];

    useEffect(() => {
        dispatch(getLanguageListRequest([loginName, repoName]));
    }, [repoName])

    return (
        <View style={Styles.card}>
            <View style={Styles.section}>
                <View style={Styles.section1}>
                    <Text>{repoName}</Text>
                </View>
                <View>
                    {currentRepData !== [] ?
                        <FlatList
                            data={currentRepData}
                            renderItem={({ item }) => (
                                <View>
                                    <Text>{item}</Text>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            initialNumToRender={8}
                            maxToRenderPerBatch={5}
                            onEndReachedThreshold={0.5}
                        />
                        : <Text>No languages </Text>}
                </View>
            </View>
        </View>
    )
}
export default SecondCard
