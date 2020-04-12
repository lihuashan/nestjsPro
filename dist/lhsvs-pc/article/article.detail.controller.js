"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const moment = require("moment");
const utils_1 = require("../../common/utils");
const article_service_1 = require("../../article/article.service");
const comment_service_1 = require("../../comment/comment.service");
const reply_service_1 = require("../../replyComment/reply.service");
let ArticleDetailController = class ArticleDetailController {
    constructor(articleService, commentService, replyService) {
        this.articleService = articleService;
        this.commentService = commentService;
        this.replyService = replyService;
    }
    findAll(param, body, query, req) {
        return __awaiter(this, void 0, void 0, function* () {
            let Detail = null;
            const id = utils_1.decryptSecret(body.id);
            yield this.articleService.updateById(id);
            const article = yield this.articleService.detailById(id);
            const [comment, commentCount] = yield this.commentService.findById(id);
            console.log(article, '*****************');
            const createdTime = moment(article.created_time).format('YYYY-MM-DD HH:mm:ss');
            const commentObject = [];
            const commentIds = [];
            comment.map((item) => {
                const str = moment(item.createdTime).format('YYYY-MM-DD HH:mm:ss');
                commentIds.push(item.id);
                commentObject.push({
                    content: item.content,
                    contentId: item.id,
                    commentatorId: item.user.id,
                    commentatorName: item.user.username,
                    commentatorPic: item.user.userPic,
                    createdTime: str,
                    user: item.user,
                    repliedComments: [],
                });
            });
            const [replyList, count] = yield this.replyService.findById(commentIds);
            console.log(count, commentCount);
            commentObject.map(it => {
                if (replyList && replyList.length > 0) {
                    replyList.map(item => {
                        if (it.contentId === item.comment.id) {
                            it.repliedComments.push(item);
                        }
                    });
                }
            });
            Detail = Object.assign(Object.assign({}, article), { created_time: createdTime, comment: commentObject });
            return { data: Detail };
        });
    }
};
__decorate([
    common_1.Post('pc/detail'),
    __param(0, common_1.Param()), __param(1, common_1.Body()), __param(2, common_1.Query()), __param(3, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleDetailController.prototype, "findAll", null);
ArticleDetailController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [article_service_1.ArticleService, comment_service_1.CommentService, reply_service_1.ReplyService])
], ArticleDetailController);
exports.ArticleDetailController = ArticleDetailController;
