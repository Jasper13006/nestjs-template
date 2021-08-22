import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createdocument } from './config/swagger/swaggerConfig';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // if (configService.get('ENVIRONMENT') === 'DEVELOPMENT') {
    SwaggerModule.setup('docs', app, createdocument(app));
  // }
  await app.listen(3000);
}
bootstrap();
