import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.create({ ...createUserDto });
    return user;
  }

  async findAll() {
    const users = await this.userModel.findAll();

    return users;
  }

  async findOne(id: number) {
    const user = await this.userModel.findOne({ where: { id } });

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const [affectedRow, result] = await this.userModel.update(updateUserDto, {
      where: { id },
      returning: true,
    });

    if (affectedRow === 0) {
      throw new NotFoundException();
    }

    const [user] = result;

    return user;
  }

  async remove(id: number) {
    const [affectedRow, result] = await this.userModel.update(
      { isActive: false },
      {
        where: { id },
        returning: true,
      },
    );

    if (affectedRow === 0) {
      throw new NotFoundException();
    }
    const [user] = result;

    return user;
  }
}
