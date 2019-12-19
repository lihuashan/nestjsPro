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
const category_service_1 = require("../../category/category.service");
let HomeCategoryController = class HomeCategoryController {
    constructor(articleService, categoryService) {
        this.articleService = articleService;
        this.categoryService = categoryService;
        this.pageSize = 3;
        this.totalCount = 0;
        this.isShowPagination = false;
    }
    root(param, P, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.setHeader('Set-Cookie', ['widget_session=abc123', 'SameSite=Strict', 'Secure']);
            console.log(param, P);
            const id = utils_1.decryptSecret(param.ida);
            try {
                if (P) {
                    this.P = P;
                }
                else {
                    this.P = 1;
                }
                const [article, count] = yield this.articleService.homeCategoryFindById({
                    id: id,
                    P: this.P,
                    pageSize: this.pageSize,
                });
                this.totalCount = count;
                if (article.length > 0) {
                    this.tempTitle = article[0]['category']['name'];
                    this.articleList = JSON.stringify(article);
                    this.articleList = JSON.parse(this.articleList);
                    for (let i = 0; i < this.articleList.length; i++) {
                        this.articleList[i]['tempColor'] = utils_1.arrColor[Math.round(Math.random() * 23)];
                        let temp = this.articleList[i]['id'];
                        temp = yield utils_1.encryptSecret(temp);
                        this.articleList[i]['ida'] = temp;
                    }
                    this.isShowPagination = true;
                    this.msg = null;
                }
                else {
                    const categoryTemp = yield this.categoryService.pcClientFindNameById(id);
                    this.tempTitle = categoryTemp['name'];
                    this.articleList = null;
                    this.msg = '暂无数据！';
                    this.isShowPagination = false;
                }
            }
            catch (e) {
                this.articleList = null;
                this.isShowPagination = false;
                this.msg = '请求异常！';
            }
            try {
                const category = yield this.categoryService.findAll();
                this.categoryList = JSON.stringify(category);
                this.categoryList = JSON.parse(this.categoryList);
                for (let i = 0; i < this.categoryList.length; i++) {
                    this.categoryList[i]['tempColor'] = utils_1.asideColor[Math.round(Math.random() * 4)];
                    let temp = this.categoryList[i]['id'];
                    temp = yield utils_1.encryptSecret(temp);
                    this.categoryList[i]['ida'] = temp;
                    if (this.categoryList[i]['id'] === Number(id)) {
                        this.categoryList[i]['active'] = true;
                    }
                    else {
                        this.categoryList[i]['active'] = false;
                    }
                }
            }
            catch (e) {
                this.msg = e.toString();
            }
            const data = {
                title: this.tempTitle || '',
                articleList: this.articleList,
                categoryList: this.categoryList,
                P: this.P,
                pageSize: this.pageSize,
                totalCount: this.totalCount,
                isShowPagination: this.isShowPagination,
            };
            console.log(data.P);
            return { msg: this.msg, data: data };
        });
    }
};
__decorate([
    common_1.Get('/:ida'),
    common_1.Render('home/index'),
    __param(0, common_1.Param()), __param(1, common_1.Query('P')), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Promise)
], HomeCategoryController.prototype, "root", null);
HomeCategoryController = __decorate([
    common_1.Controller('category'),
    __metadata("design:paramtypes", [article_service_1.ArticleService, category_service_1.CategoryService])
], HomeCategoryController);
exports.HomeCategoryController = HomeCategoryController;
