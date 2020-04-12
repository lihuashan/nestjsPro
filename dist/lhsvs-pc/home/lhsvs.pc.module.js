"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lhsvs_pc_controller_1 = require("./lhsvs.pc.controller");
const article_entity_1 = require("../../db/article.entity");
const article_module_1 = require("../../article/article.module");
const article_detail_controller_1 = require("../article/article.detail.controller");
const comment_controller_1 = require("../comment/comment.controller");
const comment_module_1 = require("../../comment/comment.module");
const reply_controller_1 = require("../reply/reply.controller");
const reply_module_1 = require("../../replyComment/reply.module");
const comment_entity_1 = require("../../db/comment.entity");
const replyComment_entity_1 = require("../../db/replyComment.entity");
let LhsvsPcModule = class LhsvsPcModule {
};
LhsvsPcModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([article_entity_1.Article, comment_entity_1.Comment, replyComment_entity_1.ReplyComment]), article_module_1.ArticleModule, comment_module_1.CommentModule, reply_module_1.ReplyModule],
        providers: [],
        controllers: [lhsvs_pc_controller_1.LhsvsPcController, article_detail_controller_1.ArticleDetailController, comment_controller_1.CommentController, reply_controller_1.ReplyController],
        exports: [],
    })
], LhsvsPcModule);
exports.LhsvsPcModule = LhsvsPcModule;
