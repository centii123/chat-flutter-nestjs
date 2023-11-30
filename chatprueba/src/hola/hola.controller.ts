import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('hola')
export class HolaController {
    @Get()
    hola(){
        return "estas conectado papu";
    }

    @Post()
    holaC(@Body() hola){
        console.log(hola)
    }
}
