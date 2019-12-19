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
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_name' }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ name: 'pass_word' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ type: 'tinyint', name: 'user_type' }),
    __metadata("design:type", Number)
], User.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_email' }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_pic' }),
    __metadata("design:type", String)
], User.prototype, "userPic", void 0);
__decorate([
    typeorm_1.Column({ name: 'login_ip' }),
    __metadata("design:type", String)
], User.prototype, "loginIp", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'create_time' }),
    __metadata("design:type", Date)
], User.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'update_time' }),
    __metadata("design:type", Date)
], User.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_extend' }),
    __metadata("design:type", String)
], User.prototype, "userExtend", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    typeorm_1.OneToMany(type => article_entity_1.Article, article => article.user),
    __metadata("design:type", Array)
], User.prototype, "articles", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
