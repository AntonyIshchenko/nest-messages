import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { MessagesModule } from 'src/messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
