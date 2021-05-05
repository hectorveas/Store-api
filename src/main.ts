import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //solo recibira los parametros que estan en DTO, cualquier parametro extra que venga del JSON lo ignora
      forbidNonWhitelisted: true, //no recibira la peticion del json   ** elegir whitelist o forbidNonWhitelisted
    }),
  );
  await app.listen(3000);
}
bootstrap();
