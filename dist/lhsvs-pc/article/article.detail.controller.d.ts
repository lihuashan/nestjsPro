import { ArticleService } from '../../article/article.service';
import { CommentService } from '../../comment/comment.service';
import { ReplyService } from '../../replyComment/reply.service';
export declare class ArticleDetailController {
    private articleService;
    private commentService;
    private replyService;
    constructor(articleService: ArticleService, commentService: CommentService, replyService: ReplyService);
    findAll(param: any, body: any, query: any, req: any): Promise<{
        data: any;
    }>;
}
