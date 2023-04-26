import mqtt, {Client} from 'mqtt';
import {IMqtt} from "./IMqtt";
export class Mqtt implements IMqtt{
    private client: Client | null;

    constructor() {
        this.client = null;
    }

    public connect(callback?: Function): void {
        this.client = mqtt.connect(import.meta.env.VITE_MQTT_HOST_URL,{
            username: import.meta.env.VITE_MQTT_USERNAME,
            password: import.meta.env.VITE_MQTT_PASSWORD,
        }).on('connect', () => {
            console.log('[~MQTT] = Connected');
            callback && callback();
        });
    }

    public disconnect(): void {
        this.client?.end(false,{},()=>{
            console.log('[~MQTT] = disconnected')
        });
    }

    /**
     *
     * @param topic
     */
    public subscribe(topic: string): void {
        this.client?.subscribe(topic, () =>
            console.log('[~MQTT] = subscribe in ' + topic)
        );
    }

    /**
     *
     * @param topic
     * @param message
     */
    public publish(topic: string, message: string): void {
        this.client?.publish(topic, message, () => {
            console.log('[~MQTT] = publish = ' + JSON.parse(message))
        })
    }

    /**
     *
     * @param callback
     */
    public onMessage(callback: Function): void {
        this.client?.on('message', callback);
    }

    /**
     *
     * @param topic
     */
    public unsubscribe(topic: string): void {
        this.client?.unsubscribe(topic,{}, ()=>
            console.log('[~MQTT] = unsubscribe = ' + topic)
        );
    }
}