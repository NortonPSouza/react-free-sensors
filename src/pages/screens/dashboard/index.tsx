import {useEffect, useState} from "react";
import { Center, Container, Flex, Spacer} from "@chakra-ui/react";

import {Light} from "./components/ligth";
import {AddButton} from "./components/modals/addButton";
import * as Card from "~@Components/card";
import {Graph} from "~@Components/graph";
import {Mqtt} from "~@Factory/mqtt";

interface MessageMqtt {
    humidity: number;
    temperature: number;
    lightness: number;

}
const mqtt = new Mqtt();


export function Dashboard(): JSX.Element {
    const [humidity, setHumidity] = useState<number>(0);
    const [temperature, setTemperature] = useState<number>(0);
    const [light, setLight] = useState<number>(0);

    function createButton(device: string, name: string): void{
        if(device.length && name.length){
            mqtt.publish(
                `north/command/${device.toLowerCase()}`,
                JSON.stringify({type: "create", button: name.toLowerCase()})
            );
        }
        //TODO - add alert lib
    }

    useEffect(() => {
        mqtt.connect();
        mqtt.subscribe("north/sensors/status");
        mqtt.onMessage((topic: string, _message: Uint8Array) => {
            const message: MessageMqtt = JSON.parse(_message.toString());
            setHumidity(message.humidity);
            setLight(message.lightness);
            setTemperature(message.temperature);
        });
        return () => mqtt.unsubscribe("north/sensors/status")
    }, []);

    return (
        <Container w="100vh" h="50vh" p={4} color="white" centerContent>
            <section>
                <Flex>
                    <Card.Root>
                        <>
                            <Card.Header title="Umidade"/>
                            <Card.Body>
                                <Center>
                                    <Graph
                                        unity="%"
                                        id="humidity"
                                        data={humidity}
                                        type="radialBar"
                                        startColor={"#ee442d"}
                                        endColor={"#69df3f"}
                                    />
                                </Center>
                            </Card.Body>
                        </>
                    </Card.Root>
                    <Spacer/>
                    <Card.Root>
                        <>
                            <Card.Header title="Temperatura"/>
                            <Card.Body>
                                <Center>
                                    <Graph
                                        id="light"
                                        unity="°C"
                                        type="radialBar"
                                        data={temperature}
                                        endColor={"#ee442d"}
                                        startColor={"#69df3f"}
                                    />
                                </Center>
                            </Card.Body>
                        </>
                    </Card.Root>
                    <Spacer/>
                    <Card.Root>
                        <>
                            <Card.Header title="Luminosidade"/>
                            <Card.Body>
                                <Center>
                                    <Light lightness={light}/>
                                </Center>
                            </Card.Body>
                        </>
                    </Card.Root>
                </Flex>
            </section>
            <section>
              <AddButton onSend={createButton}/>
            </section>
        </Container>
    );
}