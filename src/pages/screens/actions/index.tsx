import {useEffect, useState} from "react";

import {Content} from "~@Components/content";

import {ActionsButtons} from "./components/action";

interface ButtonsState {
    device: string;
    name: string;
}

export function Actions(): JSX.Element {
    const [buttons, setButtons] = useState<ButtonsState[]>([]);

    function getButtons(): void {
        fetch("http://localhost:3000/api/v1/buttons")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(response => setButtons(response))
            .catch(error => alert(error))
    }

    useEffect(()=>{
        getButtons();
    },[])

    return (
        <Content path={"Actions"}>
            {
                buttons.map((item,index )=>
                    <ActionsButtons
                        key={index}
                        title={item.device}
                        name={item.name}
                        backgroundColor="#0080FB"
                        description="Faz alguma coisa sla"
                    />
                )
            }

        </Content>
    )
}