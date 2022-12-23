import { Module } from '@nestjs/common';
import { LeaveTypeService } from './leave-type.service';
import { LeaveTypeController } from './leave-type.controller';
import { LeaveType } from './entities/leave-type.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([LeaveType])],
  controllers: [LeaveTypeController],
  providers: [LeaveTypeService]
})
export class LeaveTypeModule {}
