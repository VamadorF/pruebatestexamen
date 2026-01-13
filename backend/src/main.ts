import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para permitir conexiones desde la app móvil
  app.enableCors();
  
  await app.listen(3000);
  console.log('Backend NestJS ejecutándose en http://localhost:3000');
}
bootstrap();

