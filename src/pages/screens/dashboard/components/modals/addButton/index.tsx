import {
    Box,
    Button,
    FormControl, FormLabel,
    Input,
    Modal,
    ModalBody, ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react"
import React from "react";

interface PropsAddButton {
    onSend(device: string, name: string): void
}
export function AddButton(props: PropsAddButton): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [device, setDevice] = React.useState("");
    const [name, setName] = React.useState("");

    return (
        <Box mt={4} p={2}>
            <Button colorScheme="blue" onClick={onOpen}>Adicionar botão</Button>

            <Modal
                isCentered
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Adiconar novo botão</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Dispositivo</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder='Dispositivo'
                                onChange={(event) => setDevice(event.target.value) }
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Nome do botão</FormLabel>
                            <Input
                                placeholder='Nome do botão'
                                onChange={(event) => setName(event.target.value) }
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            props.onSend(device, name);
                            onClose();
                        }} >
                            Enviar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}