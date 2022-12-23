import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaveRequestsModule } from './modules/leave-requests/leave-requests.module';
import { LeaveTypeModule } from './modules/leave-type/leave-type.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      username: 'postgres',
      password: 'banana08',
      database: 'leave-request',
      host: 'localhost',
      dialect: 'postgres',
      port: 5432,
      autoLoadModels: true,
      synchronize: true,
    }),
    LeaveTypeModule,
    LeaveRequestsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
