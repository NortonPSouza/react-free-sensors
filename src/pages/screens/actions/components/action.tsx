import {MdGames} from "react-icons/md";
import {Button, Flex, Grid, GridItem, Icon, Heading} from "@chakra-ui/react";

import * as Card from "~@Components/card";
import {Mqtt} from "~@Factory/mqtt";


type ActionsProps = {
    title: string;
    description: string;
    backgroundColor: string
}

const mqtt = new Mqtt();

function toFirstLetterUpper(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function ActionsButtons(props: ActionsProps): JSX.Element {
    function sendMqttCommand(): void {
        mqtt.connect(() => {
            mqtt.publish(
                `north/command/${props.description.toLowerCase()}`,
                JSON.stringify({type: "click", button: props.title.toLowerCase()}),
            );
            mqtt.disconnect()
        });
    }

    return (
        <Card.Root>
            <Card.Header>
                <Flex justifyContent="flex-start" alignItems="center">
                    <Icon as={MdGames} boxSize={8} mr={3}/>
                    {toFirstLetterUpper(props.title.replace("_", " "))}
                </Flex>
            </Card.Header>
            <Card.Body>
                <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(4, 1fr)" gap={4}>
                    <GridItem ml={3} colStart={1} colSpan={5}>
                        <Heading size="md">
                            {`${toFirstLetterUpper(props.description)}`}
                        </Heading>
                    </GridItem>
                    <GridItem rowStart={2} colStart={5}>
                        <Button bg={props.backgroundColor} onClick={sendMqttCommand}>
                            Click
                        </Button>
                    </GridItem>
                </Grid>
            </Card.Body>
        </Card.Root>
    )
}