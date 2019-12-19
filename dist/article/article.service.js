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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const article_entity_1 = require("../db/article.entity");
let ArticleService = class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    save(req, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = new article_entity_1.Article();
            article.title = req.title;
            article.subTitle = req.subTitle;
            article.description = req.description;
            article.content = req.content;
            article.user = user.userId;
            article.creator = user.username;
            article.category = req.categoryId;
            return yield this.articleRepository.save(article);
        });
    }
    remove(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield this.articleRepository.findOne(req.id);
            yield this.articleRepository.remove(article);
        });
    }
    update(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield this.articleRepository.findOne(req.id);
            yield this.articleRepository.update(article, { recommendation: req.status });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.articleRepository
                .createQueryBuilder('Article')
                .innerJoinAndSelect("Article.category", "category")
                .orderBy("Article.created_time", "DESC")
                .getMany();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleRepository.findOne({ category: id });
        });
    }
    findAndCount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let [allArticle, articlesCount] = yield this.articleRepository.findAndCount({ category: id });
            return { allArticle, articlesCount };
        });
    }
    findOneDetailId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleRepository.findOne(id, {
                join: {
                    alias: 'Article',
                    leftJoinAndSelect: {
                        category: 'Article.category',
                    },
                },
            });
        });
    }
    homeFind(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.articleRepository
                .createQueryBuilder('Article')
                .innerJoinAndSelect("Article.category", "category")
                .orderBy("Article.id", "DESC")
                .skip((params.P - 1) * params.pageSize)
                .take(params.pageSize)
                .getManyAndCount();
        });
    }
    detailById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleRepository.findOne(id, {
                join: {
                    alias: 'Article',
                    leftJoinAndSelect: {
                        category: 'Article.category',
                    },
                },
            });
        });
    }
    homeCategoryFindById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.articleRepository
                .createQueryBuilder('Article')
                .innerJoinAndSelect("Article.category", "category")
                .where({ category: params.id })
                .orderBy("Article.created_time", "DESC")
                .skip((params.P - 1) * params.pageSize)
                .take(params.pageSize)
                .getManyAndCount();
        });
    }
    homeCategoryFindNameById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.articleRepository
                .createQueryBuilder('Article')
                .innerJoinAndSelect("Article.category", "category")
                .where({ category: id })
                .orderBy("Article.created_time", "DESC")
                .getMany();
        });
    }
    searchArticleByWordKey(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.articleRepository
                .createQueryBuilder('Article')
                .where("Article.title LIKE :filter1", { filter1: "%" + params.wk + "%" })
                .orWhere("Article.subTitle LIKE :filter2", { filter2: "%" + params.wk + "%" })
                .orWhere("Article.description LIKE :filter3", { filter3: "%" + params.wk + "%" })
                .orderBy("Article.id")
                .skip((params.P - 1) * params.pageSize)
                .take(params.pageSize)
                .getManyAndCount();
        });
    }
    recommendArticleFindAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.articleRepository
                .createQueryBuilder('Article')
                .where({ recommendation: true })
                .orderBy("Article.created_time", "DESC")
                .take(30)
                .getMany();
        });
    }
};
ArticleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(article_entity_1.Article)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArticleService);
exports.ArticleService = ArticleService;
