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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const category_entity_1 = require("./category.entity");
let Article = class Article {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Article.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Article.prototype, "subTitle", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Article.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Article.prototype, "creator", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Article.prototype, "recommendation", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Article.prototype, "created_time", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Article.prototype, "updated_time", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_entity_1.User, user => user.articles),
    __metadata("design:type", users_entity_1.User)
], Article.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => category_entity_1.Category, category => category.articles),
    __metadata("design:type", category_entity_1.Category)
], Article.prototype, "category", void 0);
Article = __decorate([
    typeorm_1.Entity()
], Article);
exports.Article = Article;
