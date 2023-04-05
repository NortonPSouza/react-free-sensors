import {useEffect, useState} from "react";
import * as Card from "~@Components/card";
import {Mqtt} from "~@Factory/mqtt";
import {Content} from "~@Components/content";

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

    function createButton(device: string, name: string): void {
        if (device.length && name.length) {
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
        <Content path="Dashboard">
            <>
                <Card.Root>
                    <Card.Body>
                        <h6 style={{color: "red"}}>{humidity}</h6>
                    </Card.Body>
                </Card.Root>
                <Card.Root>
                    <Card.Body>
                        <h6 style={{color: "red"}}>{temperature}</h6>
                    </Card.Body>
                </Card.Root>
                <Card.Root>
                    <Card.Body>
                        <h6 style={{color: "red"}}>{light}</h6>
                    </Card.Body>
                </Card.Root>
            </>
        </Content>
    );
}