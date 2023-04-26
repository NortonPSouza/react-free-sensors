export  interface IMqtt {
    connect(callback?: Function): void;
    subscribe(topic: string): void;
    publish(topic: string, message: string): void;
    onMessage(callback: Function): void;
    unsubscribe(topic: string): void;
}