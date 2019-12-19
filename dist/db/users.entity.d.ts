import { Article } from './article.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    type: number;
    email: string;
    userPic: string;
    loginIp: string;
    createdDate: Date;
    updatedDate: Date;
    userExtend: string;
    age: number;
    address: string;
    articles: Article[];
}
