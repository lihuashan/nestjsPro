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
const upload_service_1 = require("./upload.service");
const upload_controller_1 = require("./upload.controller");
const platform_express_1 = require("@nestjs/platform-express");
const uploadFile_entity_1 = require("../db/uploadFile.entity");
let UploadModule = class UploadModule {
};
UploadModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([uploadFile_entity_1.UploadFile]),
            platform_express_1.MulterModule.register({
                dest: 'pc/public/uploads'
            })
        ],
        providers: [upload_service_1.UploadService],
        controllers: [upload_controller_1.UploadController],
        exports: [upload_service_1.UploadService]
    })
], UploadModule);
exports.UploadModule = UploadModule;
