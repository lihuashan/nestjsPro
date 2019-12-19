import { UploadService } from '../../upload/upload.service';
export declare class CalligraphyController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    calligraphyList: any;
    P: number;
    pageSize: number;
    totalCount: number;
    isShowPagination: boolean;
    msg: any;
    root(P: number, res: any): Promise<{
        msg: any;
        data: {
            title: string;
            calligraphyList: any;
            P: number;
            pageSize: number;
            totalCount: number;
            isShowPagination: boolean;
        };
    }>;
}
