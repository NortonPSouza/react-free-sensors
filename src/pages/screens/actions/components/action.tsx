import {MdGames} from "react-icons/md";
import {Button, Flex, Grid, GridItem, Icon} from "@chakra-ui/react";

import * as Card from "~@Components/card";
import {Mqtt} from "~@Factory/mqtt";


type ActionsProps = {
    name: string;
    title: string;
    backgroundColor: string
}

const mqtt = new Mqtt();

export function ActionsButtons(props: ActionsProps): JSX.Element {
    function sendMqttCommand(): void {
        mqtt.connect(() => {
            mqtt.publish(
                `north/command/${props.title.toLowerCase()}`,
                JSON.stringify({type: "click", button: props.name.toLowerCase()}),
            );
            mqtt.disconnect()
        });
    }

    return (
        <Card.Root>
            <Card.Header>
                <Flex justifyContent="flex-start" alignItems="center">
                    <Icon as={MdGames} boxSize={8} mr={3}/>
                    {props.title}
                </Flex>
            </Card.Header>
            <Card.Body>
                <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
                    <GridItem colSpan={5}>
                    </GridItem>
                    <GridItem rowStart={2} colStart={5}>
                        <Button bg={props.backgroundColor} onClick={sendMqttCommand}>
                            {props.name.replace("_", " ")}
                        </Button>
                    </GridItem>
                </Grid>
            </Card.Body>
        </Card.Root>
    )
}