import { ReplyService } from '../../replyComment/reply.service';
export declare class ReplyController {
    private readonly replyService;
    constructor(replyService: ReplyService);
    create(body: any, req: any): Promise<import("../../db/replyComment.entity").ReplyComment>;
}
