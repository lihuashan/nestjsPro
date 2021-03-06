"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const upload_module_1 = require("../../upload/upload.module");
const calligraphy_controller_1 = require("./calligraphy.controller");
const calligraphy_detail_controller_1 = require("./calligraphy.detail.controller");
const typeorm_1 = require("@nestjs/typeorm");
const uploadFile_entity_1 = require("../../db/uploadFile.entity");
let CalligraphyModule = class CalligraphyModule {
};
CalligraphyModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([uploadFile_entity_1.UploadFile]),
            upload_module_1.UploadModule
        ],
        controllers: [
            calligraphy_controller_1.CalligraphyController,
            calligraphy_detail_controller_1.CalligraphyDetailController
        ]
    })
], CalligraphyModule);
exports.CalligraphyModule = CalligraphyModule;
