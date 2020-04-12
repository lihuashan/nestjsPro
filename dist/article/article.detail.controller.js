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
const article_service_1 = require("./article.service");
const category_service_1 = require("../category/category.service");
let ArticleDetailController = class ArticleDetailController {
    constructor(articleService, categoryService) {
        this.articleService = articleService;
        this.categoryService = categoryService;
    }
    root(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield this.articleService.findOneDetailId(id);
            const category = yield this.categoryService.findAll();
            let articleList = JSON.stringify(article);
            articleList = JSON.parse(articleList);
            let categoryList = JSON.stringify(category);
            categoryList = JSON.parse(categoryList);
            const data = {
                content: articleList,
                categoryList,
            };
            console.log(data);
            return { msg: 99, data };
        });
    }
};
__decorate([
    common_1.Get(':id'),
    common_1.Render('home/detail'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleDetailController.prototype, "root", null);
ArticleDetailController = __decorate([
    common_1.Controller('api/articleDetail'),
    __metadata("design:paramtypes", [article_service_1.ArticleService, category_service_1.CategoryService])
], ArticleDetailController);
exports.ArticleDetailController = ArticleDetailController;
