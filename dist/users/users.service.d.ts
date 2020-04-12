import { Repository } from 'typeorm';
import { User } from '../db/users.entity';
export declare class UsersService {
    private readonly UserRepository;
    private readonly users;
    constructor(UserRepository: Repository<User>);
    findOne(username: string): Promise<User | undefined>;
}
