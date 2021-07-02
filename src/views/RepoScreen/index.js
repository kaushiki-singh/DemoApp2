import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import SecondCard from '../../components/SecondCard';
import { useDispatch, useSelector } from 'react-redux';
import { getReposListRequest } from '../../actions/repoAction';


function RepoScreen({ route }) {
    const { login } = route.params;

    const dispatch = useDispatch();
    const MyRepoData = useSelector((state) => {
        return state.repo.data;
    });

    useEffect(() => {
        dispatch(getReposListRequest(login.login));
    }, [])

    return (
        < SafeAreaView >
            <FlatList
                data={MyRepoData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <SecondCard
                        repoName={item.name}
                        loginName={login.login}
                    >
                    </SecondCard>
                )}
            />
        </SafeAreaView >
    )
}

export default RepoScreen;
