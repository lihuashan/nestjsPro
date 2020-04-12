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
const article_service_1 = require("../../article/article.service");
const utils_1 = require("../../common/utils");
const comment_service_1 = require("../../comment/comment.service");
const moment = require('moment');
let DetailController = class DetailController {
    constructor(articleService, commentService) {
        this.articleService = articleService;
        this.commentService = commentService;
    }
    root(ida, res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = utils_1.decryptSecret(ida);
            yield this.articleService.updateById(id);
            const article = yield this.articleService.detailById(id);
            const comment = yield this.commentService.findById(id);
            let articleDetail = JSON.stringify(article);
            articleDetail = JSON.parse(articleDetail);
            let commentList = JSON.stringify(comment);
            commentList = JSON.parse(commentList);
            const data = articleDetail;
            data['created_time'] = moment(articleDetail['created_time']).format('YYYY-MM-DD HH:mm:ss');
            data['commentList'] = commentList;
            console.log(data, '-------------');
            return { msg: 99, data: data, };
        });
    }
};
__decorate([
    common_1.Get(':ida'),
    common_1.Header('Cache-Control', 'defineHeader'),
    common_1.Render('detail/detail'),
    __param(0, common_1.Param('ida')), __param(1, common_1.Res()), __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], DetailController.prototype, "root", null);
DetailController = __decorate([
    common_1.Controller('detail'),
    __metadata("design:paramtypes", [article_service_1.ArticleService, comment_service_1.CommentService])
], DetailController);
exports.DetailController = DetailController;
