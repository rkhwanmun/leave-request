import { Module } from '@nestjs/common';
import { LeaveRequestsService } from './leave-requests.service';
import { LeaveRequestsController } from './leave-requests.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { LeaveRequest } from './entities/leave-request.entity';

@Module({
  imports:[SequelizeModule.forFeature([LeaveRequest])],
  controllers: [LeaveRequestsController],
  providers: [LeaveRequestsService]
})
export class LeaveRequestsModule {}
