import {FaHome, FaCog} from "react-icons/fa";
import {Avatar} from "@chakra-ui/react";

import {MenuItem} from "./menuItem";

export function SideMenu(): JSX.Element {
    return (
        <menu style={{
            margin: "0px",
            width: "65px",
            height: "100vh",
            position: "relative",
            display: "inline-block",
            backgroundColor: "#0082FF"
        }}>
            <ul style={{listStyle: "none"}}>
                <li>
                    <Avatar bg="#000000" mt={4} position="absolute" right="10px"/>
                </li>
                <MenuItem icon={FaHome} top="80px" path="/"/>
                <MenuItem icon={FaCog} top="150px" path="/actions"/>
            </ul>
        </menu>
    )
}