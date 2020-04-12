import { PcClientService } from '../pc.client.service';
export declare class ContactController {
    private pcClientService;
    constructor(pcClientService: PcClientService);
    create(body: any): Promise<import("../../db/messageUser.entity").MessageUser>;
    root(): Promise<{
        msg: number;
        data: string;
    }>;
}
