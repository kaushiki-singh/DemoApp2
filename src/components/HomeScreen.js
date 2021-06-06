import React, { useEffect, useState } from 'react';
import {View, Text, Button, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import FirstCard from './FirstCard';
// import {UserData} from '../constants/UserData';
import RepoScreen from './RepoScreen';
import {connect} from "react-redux";
import axios from 'axios';

const HomeScreen = (props) => {

    const {isLoading, data, error} = props; 

    const [login, setLogin] = useState("hi");
    const [userData, setUserData] = useState([]);

    const url = "https://api.github.com/users";
//fetching data from api
    const getUserData = () => {
        axios.get(url)
        .then((response) => {
            setUserData(response.data);
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    
    
// handling click on a user
   function handleClick(user){
        setLogin(user.login);   
   }
// navigating to repo page
   useEffect(()=>{
    handleNavigation();
   },[login])

// function for navigation
    function handleNavigation(){
    props.navigation.navigate('Repo', {login:{login}});
    }

//callig function to fetch api
    useEffect(() => {
    getUserData();
    return (() => console.log('cleaned up'));
    },[url])



    return (
        <SafeAreaView>
            <FlatList
            data={userData}
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

const mapStateToProps = (state) => {
    console.log({state});
    return{
    isLoading: state.isLoading,
    data: state.data,
    error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // request: () => dispatch(getUsersListRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
