import {Card, CardHeader, CardBody, Heading, Box} from "@chakra-ui/react";

interface PropsCard {
    children: JSX.Element;
    colorBackground?: string;
    colorBorder?: string;
    colorText?: string;
}

interface PropsHeader {
    title?: string
}

interface PropsBody{
    children: JSX.Element
    fontSize: string
}

export function Root(props: PropsCard): JSX.Element {
    return (
        <Card
            w="30%"
            mt="30px"
            h="200px"
            mr="40px"
            display="inline-block"
            color={props.colorText}
            bg={props.colorBackground}
            borderTop={`5px solid ${props.colorBorder}`}
        >
            {props.children}
        </Card>
    );
}

export function Header(props: PropsHeader): JSX.Element {
    return (
        <CardHeader w="25%">
            <Heading textAlign="center">
                {props.title}
            </Heading>
        </CardHeader>
    );
}

export function Body(props: PropsBody): JSX.Element {
    return (
        <CardBody w="100%">
            <Box fontSize={props.fontSize}>
                {props.children}
            </Box>
        </CardBody>
    );
}