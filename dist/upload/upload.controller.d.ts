import { UploadService } from './upload.service';
import { UploadFile } from '../db/uploadFile.entity';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadFile(file: any, head: any, body: any): Promise<UploadFile>;
    findAll(): Promise<UploadFile[]>;
    remove(body: any): any;
    update(body: any): any;
}
