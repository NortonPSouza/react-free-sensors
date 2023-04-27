import {useEffect, useState} from "react";

import Humidity from "src/assets/humity.png";
import Temperature from "src/assets/temperature.png";
import Moon from "src/assets/moon.png";
import Sun from "src/assets/sun.png";

import {Sensors} from "./components/sensors";

import {Mqtt} from "~@Factory/mqtt";
import {Content} from "~@Components/content";

type MessageMqtt = {
    humidity: number;
    temperature: number;
    lightness: number;
}

type LightValue = {
    titleLight: string;
    imageLight: string;
}

const mqtt = new Mqtt();

function lightValue(light: number): LightValue {
    if (light <= 250) {
        return {
            titleLight: "Muito Claro", imageLight: Sun
        };
    }
    if (light <= 500) {
        return {
            titleLight: "Claro", imageLight: Sun
        };
    }
    if (light <= 750) {
        return {
            titleLight: "Escuro", imageLight: Moon
        };
    }
    return {
        titleLight: "Muito Escuro", imageLight: Moon
    };
}

export function Dashboard(): JSX.Element {
    const [humidity, setHumidity] = useState<number>(0);
    const [temperature, setTemperature] = useState<number>(0);
    const [light, setLight] = useState<number>(0);

    const {titleLight, imageLight} = lightValue(light);

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
            <Sensors value={humidity} prefix="%" title="Umidade" image={Humidity}/>
            <Sensors value={Number(temperature.toFixed(1))} prefix="ºC" title="Temperatura" image={Temperature}/>
            <Sensors
                value={light}
                title={titleLight}
                image={imageLight}
                colorText={light > 500 ? "#fafafa" : "#1E1E1E"}
                colorBackground={light > 500 ? "#1E1E1E" : "#fafafa"}/>
        </Content>
    );
}