import { Column, Default, HasMany, Model, Table } from 'sequelize-typescript';
import { LeaveRequest } from 'src/modules/leave-requests/entities/leave-request.entity';

@Table
export class User extends Model<User> {
  //Define Colume
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  phone: string;

  @Column
  email: string;

  @Column
  position: string;

  @Default(true)
  @Column
  isActive: boolean;

  //Define keys relation

  //Define associations
  @HasMany(() => LeaveRequest)
  leaveRequests: LeaveRequest[];
}
