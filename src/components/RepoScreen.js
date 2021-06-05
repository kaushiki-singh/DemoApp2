import React, { useEffect } from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import SecondCard from './SecondCard';     
import {RepoData} from '../constants/RepoData';            


function RepoScreen({repoData}) {
    // useEffect(()=>{
    //     console.warn(repoData)
    // })

    return (
        <SafeAreaView>
            <FlatList
            data={RepoData}
            renderItem = {({item}) => (
                    <SecondCard
                     repoName = {item.name}
                     languages = {item.languages_url}
                    >                       
                    </SecondCard>                
            )}
            />
        </SafeAreaView>
    )
}

export default RepoScreen;