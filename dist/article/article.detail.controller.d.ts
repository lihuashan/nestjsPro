import { ArticleService } from './article.service';
import { CategoryService } from '../category/category.service';
export declare class ArticleDetailController {
    private readonly articleService;
    private readonly categoryService;
    constructor(articleService: ArticleService, categoryService: CategoryService);
    root(id: number): Promise<{
        msg: number;
        data: {
            content: string;
            categoryList: string;
        };
    }>;
}
