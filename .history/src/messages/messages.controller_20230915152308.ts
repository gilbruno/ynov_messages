import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get('/:id')
    getMsg(id: number) {
        
    }

    @Get()
    listMessages() {

    }

    @Post()
    createMessage() {

    }


}
