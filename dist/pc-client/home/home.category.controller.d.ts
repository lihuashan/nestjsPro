import { ArticleService } from '../../article/article.service';
import { CategoryService } from '../../category/category.service';
export declare class HomeCategoryController {
    private articleService;
    private categoryService;
    constructor(articleService: ArticleService, categoryService: CategoryService);
    tempTitle: string;
    P: number;
    pageSize: number;
    totalCount: number;
    articleList: any;
    categoryList: any;
    isShowPagination: boolean;
    msg: any;
    root(param: any, P: number, res: any): Promise<{
        msg: any;
        data: {
            title: string;
            articleList: any;
            categoryList: any;
            P: number;
            pageSize: number;
            totalCount: number;
            isShowPagination: boolean;
        };
    }>;
}
