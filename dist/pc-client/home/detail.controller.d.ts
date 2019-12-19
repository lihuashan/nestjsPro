import { ArticleService } from '../../article/article.service';
export declare class DetailController {
    private articleService;
    constructor(articleService: ArticleService);
    root(ida: string, res: any): Promise<{
        msg: number;
        data: string;
    }>;
}
