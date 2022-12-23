export class CreateLeaveRequestDto {
  startDate: Date;

  endDate: Date;

  note: string;

  leaveTypeId: number;

  requesterId: number;

  approverId: number;
}
