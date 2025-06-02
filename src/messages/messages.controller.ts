import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessagesDto } from 'src/messages/dtos/create-messages.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'This action returns all messages';
  }

  @Post()
  createMessage(@Body() body: CreateMessagesDto) {
    console.log(body);
    return 'This action creates a new message';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);

    return 'This action return one message by id';
  }
}
