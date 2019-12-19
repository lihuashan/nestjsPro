import { Repository } from 'typeorm';
import { User } from '../db/users.entity';
export declare class UserService {
    private readonly UserRepository;
    constructor(UserRepository: Repository<User>);
    findOne(username: string): Promise<User | undefined>;
}
