import { Article } from '../db/article.entity';
import { ArticleService } from './article.service';
import { CategoryService } from '../category/category.service';
export declare class ArticleController {
    private readonly articleService;
    private readonly categoryService;
    constructor(articleService: ArticleService, categoryService: CategoryService);
    getProfile(req: any): any;
    create(body: any, req: any): Promise<Article>;
    remove(body: any): Promise<void>;
    update(body: any): Promise<void>;
    findAll(): Promise<any>;
    detail(body: any): Promise<any>;
    root(): Promise<{
        msg: number;
        data: {
            articleList: string;
            categoryList: string;
        };
    }>;
}
