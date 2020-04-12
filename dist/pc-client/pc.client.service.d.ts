import { Repository } from 'typeorm';
import { MessageUser } from '../db/messageUser.entity';
export declare class PcClientService {
    private readonly messageUserRepository;
    constructor(messageUserRepository: Repository<MessageUser>);
    save(req: any): Promise<MessageUser>;
}
