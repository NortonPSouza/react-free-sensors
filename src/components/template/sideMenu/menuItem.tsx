import {NavLink} from "react-router-dom";
import {IconType} from "react-icons";
import {Icon} from "@chakra-ui/react";

type MenuItemProps = {
    icon: IconType;
    top: string;
    path: string;
}

export function MenuItem(props: MenuItemProps): JSX.Element {
    return (
        <li>
            <NavLink to={props.path} style={({isActive})=>{
                return {
                    top: props.top,
                    right: "10px",
                    width: "49px",
                    height: "53px",
                    padding: "9px",
                    borderRadius: "25%",
                    position: "absolute",
                    backgroundColor: isActive ? "#0668E1" : "black"
                }
            }}>
                <Icon as={props.icon as any} boxSize={8}/>
            </NavLink>
        </li>
    );
}