import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createdocument } from './config/swagger/swaggerConfig';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get('PORT');

  if (configService.get('ENVIRONMENT') === 'DEVELOPMENT') {
    SwaggerModule.setup('docs', app, createdocument(app));
  }
  await app.listen(port, '0.0.0.0');
}
bootstrap();
