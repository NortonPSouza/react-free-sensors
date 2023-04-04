import {Box, Text, Flex, Center} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';

interface PropsLight {
    lightness: number
}

export function Light(props: PropsLight): JSX.Element {
    function lightValue(): string {
        if (props.lightness <= 250) {
            return "Muito Claro";
        }
        if (props.lightness <= 500) {
            return "Claro";
        }
        if (props.lightness <= 750) {
            return "Escuro";
        }
        return "Muito Escuro";
    }


    return (
        <Box p={1} mt={1}>
            <Flex flexDirection="column" alignItems="center">
                <Center fontSize="120px">
                    {
                        props.lightness <= 500
                            ? <FaSun/>
                            : <FaMoon/>
                    }
                </Center>
                <Text mt={5} fontSize="40px">{`${lightValue()}`}</Text>
            </Flex>
        </Box>
    )
}
