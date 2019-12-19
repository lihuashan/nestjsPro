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
const passport_1 = require("@nestjs/passport");
const article_service_1 = require("./article.service");
const category_service_1 = require("../category/category.service");
let ArticleController = class ArticleController {
    constructor(articleService, categoryService) {
        this.articleService = articleService;
        this.categoryService = categoryService;
    }
    getProfile(req) {
        return req.user;
    }
    create(body, req) {
        const user = this.getProfile(req);
        console.log(user, '-####################');
        return this.articleService.save(body, user);
    }
    remove(body) {
        return this.articleService.remove(body);
    }
    update(body) {
        return this.articleService.update(body);
    }
    findAll() {
        return this.articleService.findAll();
    }
    detail(body) {
        return this.articleService.findOneDetailId(body.id);
    }
    root() {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield this.articleService.findAll();
            const category = yield this.categoryService.findAll();
            let articleList = JSON.stringify(article);
            articleList = JSON.parse(articleList);
            let categoryList = JSON.stringify(category);
            categoryList = JSON.parse(categoryList);
            let data = {
                articleList: articleList,
                categoryList: categoryList
            };
            return { msg: 99, data: data };
        });
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "getProfile", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('add'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "create", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('delete'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "remove", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "update", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findAll", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('detail'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "detail", null);
__decorate([
    common_1.Get(),
    common_1.Render('home/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "root", null);
ArticleController = __decorate([
    common_1.Controller('api/article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService, category_service_1.CategoryService])
], ArticleController);
exports.ArticleController = ArticleController;
