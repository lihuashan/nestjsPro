import { Repository } from 'typeorm';
import { Article } from '../db/article.entity';
export declare class ArticleService {
    private readonly articleRepository;
    constructor(articleRepository: Repository<Article>);
    save(req: any, user: any): Promise<Article>;
    remove(req: any): Promise<void>;
    update(req: any): Promise<void>;
    findAll(): Promise<any>;
    findOne(id: any): Promise<Article>;
    findAndCount(id: any): Promise<{
        allArticle: Article[];
        articlesCount: number;
    }>;
    findOneDetailId(id: any): Promise<Article>;
    homeFind(params: any): Promise<any>;
    detailById(id: any): Promise<Article>;
    updateById(id: any): Promise<import("typeorm").UpdateResult>;
    homeCategoryFindById(params: any): Promise<any>;
    homeCategoryFindNameById(id: any): Promise<any>;
    searchArticleByWordKey(params: any): Promise<any>;
    recommendArticleFindAll(): Promise<any>;
    lhsvsPc(): Promise<any>;
}
