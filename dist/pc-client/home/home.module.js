"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const article_module_1 = require("../../article/article.module");
const category_module_1 = require("../../category/category.module");
const home_controller_1 = require("./home.controller");
const detail_controller_1 = require("./detail.controller");
const typeorm_1 = require("@nestjs/typeorm");
const article_entity_1 = require("../../db/article.entity");
const messageUser_entity_1 = require("../../db/messageUser.entity");
const comment_entity_1 = require("../../db/comment.entity");
const users_entity_1 = require("../../db/users.entity");
const home_category_controller_1 = require("./home.category.controller");
const search_article_controller_1 = require("./search.article.controller");
const contact_controller_1 = require("./contact.controller");
const pc_client_service_1 = require("../pc.client.service");
const comment_module_1 = require("../../comment/comment.module");
const comment_controller_1 = require("./comment.controller");
const user_service_1 = require("../../user/user.service");
const user_module_1 = require("../../user/user.module");
const register_controller_1 = require("./register.controller");
const login_controller_1 = require("./login.controller");
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([article_entity_1.Article, messageUser_entity_1.MessageUser, comment_entity_1.Comment, users_entity_1.User]), article_module_1.ArticleModule, category_module_1.CategoryModule, comment_module_1.CommentModule, user_module_1.UserModule],
        providers: [pc_client_service_1.PcClientService, user_service_1.UserService],
        controllers: [home_controller_1.HomeController, detail_controller_1.DetailController, home_category_controller_1.HomeCategoryController,
            search_article_controller_1.SearchArticleController, contact_controller_1.ContactController, comment_controller_1.CommentController, register_controller_1.RegisterController, login_controller_1.LoginController],
        exports: [pc_client_service_1.PcClientService, user_service_1.UserService],
    })
], HomeModule);
exports.HomeModule = HomeModule;
