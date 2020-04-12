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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const article_module_1 = require("./article/article.module");
const category_module_1 = require("./category/category.module");
const upload_module_1 = require("./upload/upload.module");
const home_module_1 = require("./pc-client/home/home.module");
const calligraphy_module_1 = require("./pc-client/calligraphy/calligraphy.module");
const path_1 = require("path");
const vue_module_1 = require("./pc-client/vue/vue.module");
const lhsvs_pc_module_1 = require("./lhsvs-pc/home/lhsvs.pc.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'huashan',
                database: 'lhsvs',
                entities: [path_1.join(__dirname, '**/**.entity{.ts,.js}')],
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            article_module_1.ArticleModule,
            category_module_1.CategoryModule,
            upload_module_1.UploadModule,
            home_module_1.HomeModule,
            calligraphy_module_1.CalligraphyModule,
            vue_module_1.VueModule,
            lhsvs_pc_module_1.LhsvsPcModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
