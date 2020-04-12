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
let LhsvsPcController = class LhsvsPcController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    findAll(query, body, param) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(query, param, body);
            try {
                this.pageSize = body.ps ? body.ps : 20;
                this.p = this.p ? body.p : 1;
                const [article, count] = yield this.articleService.homeFind({
                    p: this.p,
                    pageSize: this.pageSize,
                });
                this.totalCount = count;
                this.totalPage = Math.ceil(count / this.pageSize);
                console.log(count, '-------------', article);
                if (article.length === 0) {
                    this.articleList = [];
                    this.msg = '暂无数据！';
                }
                else {
                    const tempArticle = [];
                    article.map(val => {
                        const { id, title, description, updated_time, category, viewNum, comment, creator } = val;
                        const updatedTime = moment(updated_time).format('YYYY-MM-DD HH:mm:ss');
                        const ids = utils_1.encryptSecret(id);
                        const temp = {
                            id: ids, title, description, updated_time: updatedTime, categoryName: category.name, viewNum, comment_num: comment.length, creator,
                        };
                        tempArticle.push(temp);
                    });
                    this.articleList = tempArticle;
                    this.msg = null;
                }
            }
            catch (e) {
                this.articleList = null;
                this.msg = '请求异常！';
            }
            return { data: this.articleList, tp: this.totalPage, cp: this.p, ps: this.pageSize, tc: this.totalCount };
        });
    }
};
__decorate([
    common_1.Post('home'),
    __param(0, common_1.Query()), __param(1, common_1.Body()), __param(2, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], LhsvsPcController.prototype, "findAll", null);
LhsvsPcController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], LhsvsPcController);
exports.LhsvsPcController = LhsvsPcController;
