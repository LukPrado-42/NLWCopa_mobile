import { Avatar, Heading, HStack, Text, VStack, Box } from 'native-base';

export interface RankingCardProps {
    id: string;
    guessPoints: number;
    user: {
        name: string;
        avatarUrl: string;
    };
};

interface Props {
    data: RankingCardProps;
    title: number | undefined;
    
}


export function RankingCard({data, title}: Props) {
    return(
        <HStack 
            w="full"
            h={20}
            bgColor="gray.800"
            borderBottomWidth={3}
            borderBottomColor="yellow.500"
            alignItems="center"
            justifyContent="space-between"
            rounded="sm"
            mb={3}
            p={4}
        >
            <HStack >
                <Avatar 
                    w={10}
                    h={10}
                    rounded="full"
                    borderWidth={2}
                    borderColor="gray.800"
                    
                    source={{uri: data.user.avatarUrl}}
                    />

                <VStack ml={4} >
                    <Heading color="white" fontSize="md" fontFamily="heading"  >
                        {data.user.name}
                    </Heading>
                    <Text color="gray.200" fontSize="xs" >
                        {`${data.guessPoints} ponto(s)`}
                    </Text>
                </VStack>
            </HStack>

            <Box
                w={9}
                h={6}
                mr={2}
                bgColor={title > 3 ? "gray.600" : "yellow.500"}
                rounded="xl"
                alignItems="center" 
            >
                <Text 
                    textAlign="center"
                    bold 
                    color={title > 3 ? "gray.300" : "gray.950"}
                >
                    {`${title}°`}
                </Text>
            </Box>
        </HStack>
    )
}