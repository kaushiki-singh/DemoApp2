import React, { useEffect, useState } from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import SecondCard from './SecondCard';     
// import {RepoData} from '../constants/RepoData';            
import axios from 'axios';


function RepoScreen({route, navigation}) {
    const {login} = route.params;
    const [repoData, setRepoData] = useState([]);
    const url = `https://api.github.com/users/${login.login}/repos`

    const getRepoData = () => {
        axios.get(url)
            .then((response)=> {
                setRepoData(response.data);
            })
        .catch(error => console.error(`Error: ${error}`));
    }
    useEffect(()=>{
        console.warn(login.login);
        getRepoData();

    },[url])

    return (
        <SafeAreaView>
            <FlatList
            data={repoData}
            keyExtractor={item => item.id.toString()}
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