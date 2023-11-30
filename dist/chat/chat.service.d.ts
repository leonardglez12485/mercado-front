interface Client {
    id: string;
    name: string;
}
export declare class ChatService {
    private clients;
    onLineConnected(client: Client): void;
    onLineDisconnected(id: string): void;
    getClients(): Client[];
}
export {};
