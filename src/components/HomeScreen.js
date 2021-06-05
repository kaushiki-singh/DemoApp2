import React, { useEffect, useState } from 'react';
import {View, Text, Button, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import FirstCard from './FirstCard';
import {UserData} from '../constants/UserData';
import RepoScreen from './RepoScreen';

const HomeScreen = ({navigation}) => {
    const [repoData, setRepoData] = useState([]);

   function handleClick(user){   
        console.warn(user)   
        setRepoData(user.repos_url);
        handleNavigation();        
    }
function handleNavigation(){
    console.warn(repoData);
    navigation.navigate('Repo', {repoData});
}

    return (
        <SafeAreaView>
            <FlatList
            data={UserData}
            renderItem = {({item}) => (
                <TouchableOpacity onPress={() => handleClick(item)}>
                    <FirstCard
                     name={item.login}
                     image={item.avatar_url}
                     followers={item.followers_url.length}
                     following={item.following_url.length} 
                     publicRepo = {item.repos_url.length}
                     type={item.type}
                     >                        
                    </FirstCard>
                </TouchableOpacity>
            )}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;
