import React from "react";
import {Grid, GridItem, Text} from "@chakra-ui/react";

type ContentProps = {
    path: string
    children: JSX.Element | React.ReactNode
}
export function Content(props: ContentProps): JSX.Element {
    return (
        <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(12, 1fr)" p={2} w="100vw">
            <GridItem rowSpan={1} colStart={2} colEnd={12}>
                <Text fontSize="24px">
                    FreeSensors / {props.path}
                </Text>
            </GridItem>
            <GridItem rowSpan={2} mt={3} colStart={2} colEnd={12}>
                {props.children}
            </GridItem>
        </Grid>
    );
}