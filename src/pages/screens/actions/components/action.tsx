import {FaCogs} from "react-icons/fa";
import {Button, Flex, Grid, GridItem, Icon} from "@chakra-ui/react";

import * as Card from "~@Components/card";

interface ActionsProps {
    name: string;
    title?: string;
    description: string;
    backgroundColor: string
}

export function ActionsButtons(props: ActionsProps): JSX.Element {
    return (
        <Card.Root>
            <Card.Header>
                <Flex justifyContent="flex-start">
                    <Icon as={FaCogs} boxSize={6} mr={3}/>
                    {props.title}
                </Flex>
            </Card.Header>
            <Card.Body>
                <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
                    <GridItem colSpan={5}>
                        {props.description}
                    </GridItem>
                    <GridItem rowStart={2} colStart={5}>
                        <Button bg={props.backgroundColor}>
                            {props.name}
                        </Button>
                    </GridItem>
                </Grid>
            </Card.Body>
        </Card.Root>
    )
}