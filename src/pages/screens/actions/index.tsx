import {useEffect, useState} from "react";

import {Content} from "~@Components/content";
import {Mqtt} from "~@Factory/mqtt";

import {ActionsButtons} from "./components/action";
import {AddNewButtonAction} from "./components/modals/addButton";

type ButtonsState =  {
    device: string;
    name: string;
}

const mqtt = new Mqtt();

export function Actions(): JSX.Element {
    const [buttons, setButtons] = useState<ButtonsState[]>([]);

    function createButton(device: string, name: string): void {
        if (device.length && name.length) {
            mqtt.connect(()=>{
                mqtt.publish(
                    `north/command/${device.toLowerCase()}`,
                    JSON.stringify({type: "create", button: name.toLowerCase()})
                );
                mqtt.disconnect();
            })
        }
        //TODO - add alert lib
    }

    function getButtons(): void {
        fetch("http://localhost:3000/api/v1/buttons")
            .then(buttons => {
                if (!buttons.ok) {
                    throw new Error(`HTTP error! Status: ${buttons.status}`);
                }
                return buttons.json();
            })
            .then(buttons => setButtons(buttons))
            .catch(error => alert(error))
    }

    useEffect(() => {
        getButtons();
    }, [])

    return (
        <Content path={"Actions"}>
            <AddNewButtonAction onSend={createButton}/>
            {
                buttons.map((item, index) =>
                    <ActionsButtons
                        key={index}
                        title={item.device}
                        name={item.name}
                        backgroundColor="#0080FB"
                    />
                )
            }
        </Content>
    )
}