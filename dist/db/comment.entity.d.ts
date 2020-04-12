import { Article } from './article.entity';
import { User } from './users.entity';
import { ReplyComment } from './replyComment.entity';
export declare class Comment {
    id: number;
    content: string;
    createdTime: Date;
    article: Article;
    user: User;
    replyComment: ReplyComment[];
}
