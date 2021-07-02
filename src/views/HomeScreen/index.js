import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import FirstCard from '../../components/FirstCard';
import { useDispatch, useSelector } from "react-redux";
import { getUsersListRequest } from '../../actions/userAction';

const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const MyuserData = useSelector((state) => {
        return state.user.data;
    });

    useEffect(() => {
        dispatch(getUsersListRequest());
    }, [])

    function handleNavigation(login) {
        props.navigation.navigate('Repo', { login: { login } });
    }

    return (
        <SafeAreaView>
            <FlatList
                data={MyuserData}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleNavigation(item.login)}>
                        <FirstCard
                            name={item.login}
                            image={item.avatar_url}
                            followers={item.followers_url.length}
                            following={item.following_url.length}
                            publicRepo={item.repos_url.length}
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

