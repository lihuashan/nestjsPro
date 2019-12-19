import { User } from './users.entity';
import { Category } from './category.entity';
export declare class Article {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    content: string;
    creator: string;
    recommendation: boolean;
    created_time: Date;
    updated_time: Date;
    user: User;
    category: Category;
}
