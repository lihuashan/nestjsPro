import { Article } from './article.entity';
export declare class Category {
    id: number;
    name: string;
    created_time: Date;
    updated_time: Date;
    articles: Article[];
    creator: string;
}
