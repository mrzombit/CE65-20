import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { BlogModule } from './blog/blog.module';
import { MONGODB_CONNECTION } from './app.properties'

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_CONNECTION, {
      useNewUrlParser: true,
    }),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}