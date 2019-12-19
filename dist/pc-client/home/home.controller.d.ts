import { ArticleService } from '../../article/article.service';
import { CategoryService } from '../../category/category.service';
export declare class HomeController {
    private articleService;
    private categoryService;
    constructor(articleService: ArticleService, categoryService: CategoryService);
    P: number;
    pageSize: number;
    totalCount: number;
    articleList: any;
    categoryList: any;
    recommendList: any;
    isShowPagination: boolean;
    msg: any;
    root(P: number, res: any): Promise<{
        data: {
            title: string;
            articleList: any;
            categoryList: any;
            P: number;
            pageSize: number;
            totalCount: number;
            isShowPagination: boolean;
            recommendList: any;
        };
        msg: any;
    }>;
}
