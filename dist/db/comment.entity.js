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
const article_entity_1 = require("./article.entity");
const users_entity_1 = require("./users.entity");
const replyComment_entity_1 = require("./replyComment.entity");
let Comment = class Comment {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Comment.prototype, "createdTime", void 0);
__decorate([
    typeorm_1.ManyToOne(type => article_entity_1.Article, article => article.comment),
    __metadata("design:type", article_entity_1.Article)
], Comment.prototype, "article", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_entity_1.User, user => user.articles),
    __metadata("design:type", users_entity_1.User)
], Comment.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => replyComment_entity_1.ReplyComment, replyComment => replyComment.comment),
    __metadata("design:type", Array)
], Comment.prototype, "replyComment", void 0);
Comment = __decorate([
    typeorm_1.Entity()
], Comment);
exports.Comment = Comment;
