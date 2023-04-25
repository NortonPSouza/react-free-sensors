import {Text, Flex, Image} from '@chakra-ui/react';

import * as Card from "~@Components/card";

interface PropsLight {
    value: number;
    title: string;
    image: string;
    prefix?: string;
    colorBackground?: string;
    colorText?: string;
}

export function Sensors(props: PropsLight): JSX.Element {

    return (
        <Card.Root colorBorder="#0082FF" colorBackground={props.colorBackground} colorText={props.colorText || "#fafafa"}>
            <Card.Body fontSize="20px">
                <Flex justifyContent="flex-start"  alignItems="center">
                    <Image src={props.image} boxSize='130px' mr="60px" />
                    <Flex flexDirection="column">
                        <Text fontSize="26px">{props.title}</Text>
                        <Text fontWeight="bold" fontSize="70px">{props.value}{props.prefix}</Text>
                    </Flex>
                </Flex>
            </Card.Body>
        </Card.Root>
    )
}
