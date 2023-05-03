import React from "react";
import {Card, CardHeader, CardBody, Heading, Box} from "@chakra-ui/react";

type PropsCard = {
    children: React.ReactNode;
    colorBackground?: string;
    colorBorder?: string;
    colorText?: string;
}

type PropsHeader = {
    children?: React.ReactNode;
}

type PropsBody = {
    children: React.ReactNode;
    fontSize?: string
}

export function Root(props: PropsCard): JSX.Element {
    return (
        <Card
            w="25%"
            mt="30px"
            h="200px"
            mr="40px"
            display="inline-block"
            color={props.colorText}
            bg={props.colorBackground || "#4d4d4d"}
            borderTop={`5px solid ${props.colorBorder}`}
        >
            {props.children}
        </Card>
    );
}

export function Header(props: PropsHeader): JSX.Element {
    return (
        <CardHeader w="100%">
            <Heading textAlign="center">
                {props.children}
            </Heading>
        </CardHeader>
    );
}

export function Body(props: PropsBody): JSX.Element {
    return (
        <CardBody w="100%" p={3}>
            <Box fontSize={props.fontSize}>
                {props.children}
            </Box>
        </CardBody>
    );
}