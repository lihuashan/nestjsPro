import { Repository } from 'typeorm';
import { UploadFile } from '../db/uploadFile.entity';
export declare class UploadService {
    private readonly uploadFileRepository;
    constructor(uploadFileRepository: Repository<UploadFile>);
    save(req: any): Promise<UploadFile>;
    remove(req: any): Promise<void>;
    update(req: any): Promise<void>;
    findAll(): Promise<UploadFile[]>;
    homeFindAll(params: any): Promise<any>;
}
