import { CommentService } from '../../comment/comment.service';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(body: any): any;
}
