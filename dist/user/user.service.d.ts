import { Repository } from 'typeorm';
import { User } from '../db/users.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOne(username: string): Promise<User | undefined>;
    save(req: any): Promise<User>;
}
