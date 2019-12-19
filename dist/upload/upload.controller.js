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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const multer = require("multer");
const upload_service_1 = require("./upload.service");
const platform_express_1 = require("@nestjs/platform-express");
const fs = require("fs");
const path = require("path");
const CryptoJS = require("crypto-js");
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    uploadFile(file, head, body) {
        const fileObject = Object.assign(Object.assign(Object.assign({}, file), body), { type: path.extname(file && file.originalname), urlPath: `http://localhost:4000/uploads/${file && file.filename}` });
        return this.uploadService.save(fileObject);
    }
    findAll() {
        return this.uploadService.findAll();
    }
    remove(body) {
        try {
            fs.unlinkSync('./pc/public/uploads/' + body.filename);
            console.log('删除成功！');
            return this.uploadService.remove(body);
        }
        catch (err) {
            console.log('删除异常:' + err);
            return err;
        }
    }
    update(body) {
        console.log(body);
        try {
        }
        catch (err) {
            console.log('删除异常:' + err);
            return err;
        }
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('upload/file/'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        limits: {
            fileSize: 314572800
        },
        fileFilter: (req, file, cb) => {
            let ext = path.extname(file.originalname);
            let extArr = ['.jpg', '.jpeg', '.gif', '.png'];
            if (!extArr.includes(ext)) {
                cb(new Error('扩展名不正确'), false);
            }
            else {
                cb(null, true);
            }
        },
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'pc/public/uploads');
            },
            filename: (req, file, cb) => {
                let extname = path.extname(file.originalname);
                let baseName = path.basename(file.originalname, extname).concat('' + new Date().getTime());
                let filename = CryptoJS.SHA1(baseName, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ').toString(CryptoJS.enc.Hex) + extname;
                cb(null, filename);
            },
        }),
    })),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Headers()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadFile", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('file/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "findAll", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('delete/file'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "remove", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('update/file'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "update", null);
UploadController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadController);
exports.UploadController = UploadController;
