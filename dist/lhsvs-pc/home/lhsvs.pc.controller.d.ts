import { ArticleService } from '../../article/article.service';
export declare class LhsvsPcController {
    private articleService;
    constructor(articleService: ArticleService);
    p: number;
    pageSize: number;
    totalCount: number;
    totalPage: number;
    articleList: any;
    msg: any;
    findAll(query: any, body: any, param: any): Promise<{
        data: any;
        tp: number;
        cp: number;
        ps: number;
        tc: number;
    }>;
}
