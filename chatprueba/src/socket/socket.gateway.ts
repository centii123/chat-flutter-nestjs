import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log(client.id);
    // Puedes definir lógica personalizada aquí cuando se conecta un cliente.
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
    // Puedes definir lógica personalizada aquí cuando se desconecta un cliente.
  }

  @SubscribeMessage('message') // 'message' debe coincidir con el evento emitido por el cliente
  handleMessage(client: Socket, message: string) {
    console.log(`Mensaje del cliente (${client.id}): ${message}`);
    // Puedes realizar otras acciones con el mensaje aquí si es necesario
  }
}
