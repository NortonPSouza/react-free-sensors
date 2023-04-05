import {Card, CardHeader, CardBody, Heading, Box} from "@chakra-ui/react";

interface PropsCard {
    children: JSX.Element
}

interface PropsHeader {
    title?: string
}

export function Root(props: PropsCard): JSX.Element {
    return (
        <Card bg="#4d4d4d" w="25%">
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

export function Body(props: PropsCard): JSX.Element {
    return (
        <CardBody w="100%">
            <Box>
                {props.children}
            </Box>
        </CardBody>
    );
}