import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:socket_io_client/socket_io_client.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() {
  // Dart client
  IO.Socket socket = io('http://192.168.1.3:3000',
      OptionBuilder().setTransports(['websocket']).build());
  socket.onConnect((_) async {
    var respuesta = await coneccion();
    print(respuesta);
    runApp(
      MaterialApp(
        home: Scaffold(
          body: Center(
            child: Text(respuesta), // Usar la variable respuesta aquí
          ),
        ),
      ),
    );
    socket.emit('msg', 'test');
  });
  socket.on('event', (data) => print(data));
  socket.onDisconnect((_) => print('disconnect'));
  socket.on('fromServer', (_) => print(_));
}

coneccion() async {
  final response = await http.get(Uri.http("192.168.1.3:3000", "/hola"));
  final responsepost = await http.post(Uri.http("192.168.1.3:3000", "/hola"), body: {'name': 'enrique me conecteee'});

  if (response.statusCode == 200) {
    // La solicitud fue exitosa, y puedes procesar los datos de respuesta.
    print('Respuesta del servidor: ${response.body}');
    return response.body; // No es necesario convertirlo a una cadena nuevamente
  } else {
    // La solicitud falló.
    print('Error en la solicitud: ${response.statusCode}');
    return "error";
  }
}
