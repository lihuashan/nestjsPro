import { Repository } from 'typeorm';
import { Category } from '../db/category.entity';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    create(req: any, user: any): Promise<Category>;
    findAll(): Promise<Category[]>;
    pcClientFindNameById(id: any): Promise<any>;
    pcClientFindAll(): Promise<Category[]>;
}
