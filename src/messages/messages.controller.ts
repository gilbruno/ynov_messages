import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get('/:id')
    getMsg(id: number) {
        
    }

    @Get()
    listMessages() {
        return 'List of messages'
    }

    @Post()
    createMessage() {

    }


}
