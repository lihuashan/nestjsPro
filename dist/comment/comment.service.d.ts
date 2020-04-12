import { Repository } from 'typeorm';
import { Comment } from '../db/comment.entity';
export declare class CommentService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<Comment>);
    save(req: any): Promise<Comment>;
    findById(id: any): Promise<[Comment[], number]>;
}
