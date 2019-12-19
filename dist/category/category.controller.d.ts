import { CategoryService } from './category.service';
import { Category } from '../db/category.entity';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getProfile(req: any): any;
    create(body: any, req: any): Promise<Category>;
    findAll(): Promise<Category[]>;
}
