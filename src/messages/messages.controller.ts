import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get('/:id')
    getMsg(@Param('id') id: string) {
        console.log(id)
    }

    @Get()
    listMessages() {
        return 'List of messages'
    }

    @Post()
    createMessage(@Body() body: any) {
        console.log(body)
    }

}

