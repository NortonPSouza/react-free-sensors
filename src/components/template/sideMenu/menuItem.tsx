import {IconType} from "react-icons";
import {Button, Icon} from "@chakra-ui/react";
interface MenuItemProps {
    icon: IconType;
    top: string;
}

export function MenuItem(props: MenuItemProps): JSX.Element {
    return (
        <li>
            <a style={{
                top: props.top,
                right: "10px",
                width: "49px",
                height: "53px",
                borderRadius: "25%",
                padding: "9px",
                backgroundColor: "black",
                position: "absolute",
            }}>
                <Icon as={props.icon as any} boxSize={8}/>
            </a>
        </li>
    );
}