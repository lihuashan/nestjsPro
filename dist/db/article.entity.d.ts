import { User } from './users.entity';
import { Category } from './category.entity';
import { Comment } from './comment.entity';
export declare class Article {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    content: string;
    creator: string;
    recommendation: boolean;
    viewNum: number;
    created_time: Date;
    updated_time: Date;
    user: User;
    category: Category;
    comment: Comment[];
}
