import { User } from './users.entity';
import { Comment } from './comment.entity';
export declare class ReplyComment {
    id: number;
    content: string;
    comment: Comment;
    user: User;
    createdTime: Date;
}
