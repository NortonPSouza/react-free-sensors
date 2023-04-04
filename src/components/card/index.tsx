import {Card, CardHeader, CardBody, Heading, Box} from "@chakra-ui/react";

interface PropsCard {
    children: JSX.Element
}

interface PropsHeader{
    title: string
}

export function Root(props: PropsCard): JSX.Element {
    return (
        <Card w="md" h="md" bg="#4d4d4d" m={5}>
            {props.children}
        </Card>
    );
}

export function Header(props: PropsHeader): JSX.Element {
    return (
        <CardHeader>
            <Heading size="md" textAlign="center" textTransform='uppercase'>
                {props.title}
            </Heading>
        </CardHeader>
    );
}

export function Body(props: PropsCard): JSX.Element {
    return (
        <CardBody>
            <Box>
                {props.children}
            </Box>
        </CardBody>
    );
}