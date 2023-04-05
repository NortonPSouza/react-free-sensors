import {Grid, GridItem, Text} from "@chakra-ui/react";

interface ContentProps {
    path: string
    children: JSX.Element
}
export function Content(props: ContentProps): JSX.Element {
    return (
        <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(12, 1fr)" gap={4} p={3}>
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