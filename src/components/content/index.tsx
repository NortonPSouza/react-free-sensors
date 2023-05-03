import React from "react";
import {Flex, Text} from "@chakra-ui/react";

type ContentProps = {
    path: string
    children: JSX.Element | React.ReactNode
}
export function Content(props: ContentProps): JSX.Element {
    return (
        <Flex px="40px" py="20px" w="100%" flexDirection="column">
            <div>
                <Text fontSize="24px">
                    FreeSensors / {props.path}
                </Text>
            </div>
            <div>
                {props.children}
            </div>
        </Flex>
    );
}