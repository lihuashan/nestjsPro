import { ArticleService } from '../../article/article.service';
import { CommentService } from '../../comment/comment.service';
export declare class DetailController {
    private articleService;
    private commentService;
    constructor(articleService: ArticleService, commentService: CommentService);
    root(ida: string, res: any, req: any): Promise<{
        msg: number;
        data: string;
    }>;
}
