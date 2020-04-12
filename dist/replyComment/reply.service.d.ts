import { Repository } from 'typeorm';
import { ReplyComment } from '../db/replyComment.entity';
export declare class ReplyService {
    private readonly replyCommentRepository;
    constructor(replyCommentRepository: Repository<ReplyComment>);
    save(req: any): Promise<ReplyComment>;
    findById(ids: any): Promise<[ReplyComment[], number]>;
}
