import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsocketModule } from './websocket/websocket.module';
import { SocketGateway } from './socket/socket.gateway';
import { HolaController } from './hola/hola.controller';


@Module({
  imports: [WebsocketModule],
  controllers: [AppController, HolaController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
