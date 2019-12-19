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
let UploadFile = class UploadFile {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UploadFile.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], UploadFile.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UploadFile.prototype, "filename", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UploadFile.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], UploadFile.prototype, "size", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UploadFile.prototype, "urlPath", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UploadFile.prototype, "remark", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UploadFile.prototype, "created_time", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], UploadFile.prototype, "updated_time", void 0);
UploadFile = __decorate([
    typeorm_1.Entity()
], UploadFile);
exports.UploadFile = UploadFile;
