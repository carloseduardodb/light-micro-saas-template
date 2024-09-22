import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './presentation/controllers/app.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/build'),
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
