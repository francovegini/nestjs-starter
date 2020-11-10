import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Connection } from "./config/connection.config";

@Module({
  imports: [
      SequelizeModule.forRootAsync({
        useFactory: () => {
          const connection = new Connection();
          return connection.getConnection();
        }
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
