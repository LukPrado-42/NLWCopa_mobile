import { useState, useCallback, useEffect } from 'react';
import { useToast, FlatList } from 'native-base';

import { api } from '../services/api';

import { RankingCard, RankingCardProps } from './RankingCard';
import { Loading } from './Loading';
import { EmptyRakingList } from './EmptyRakingList';
import { useFocusEffect } from '@react-navigation/native';

interface Props {
    poolId: string;
}

export function Ranking({poolId}: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [ranking, setRanking] = useState<RankingCardProps[]>([]);
    const [position, setPosition] = useState(1); //?mudei
    // const [position, setPosition] = useState<number[]>([]);


    const toast = useToast();
    console.log(ranking);
    console.log(ranking.length);
    console.log(position);
    
    
    async function fetchGuessPoints() {
        try {
            setPosition(1)
            setIsLoading(true);
            const response = await api.get(`/pools/${poolId}/participants`);
            setRanking(response.data.ranking);  //?mudei
            // setPosition( [ranking].length
            //      > 0 ? [...ranking].map((rank):number=>{
            //     const positionNumber = (ranking.length - ranking.indexOf(rank))
            //     return positionNumber
            // }) : [0] )

        } catch (error) {
            console.log(error);
            toast.show({
                title: "Não foi possível carregar o ranking.",
                placement: "top",
                bgColor: "red.500"
            });

        } finally {
             setIsLoading(false);
        }
    };

    useEffect(() => { 
        fetchGuessPoints();
    }, []); 

    useEffect(() => {            //?mudei
        setPosition(+1);
    }, [FlatList.length]); 

    
    if(isLoading) {
        return (
            <Loading />
        );
    };

    return (
        !ranking ? <EmptyRakingList /> :
            <FlatList
                data={ranking}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <RankingCard 
                        data={item}
                        // title={position.pop()}
                        title={position}  //?mudei
                    />
                )}
            _contentContainerStyle={{ pb: 40 }}
            />
    )
}