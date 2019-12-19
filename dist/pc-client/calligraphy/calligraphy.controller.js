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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const upload_service_1 = require("../../upload/upload.service");
let CalligraphyController = class CalligraphyController {
    constructor(uploadService) {
        this.uploadService = uploadService;
        this.calligraphyList = null;
        this.pageSize = 30;
        this.totalCount = 0;
        this.isShowPagination = false;
    }
    root(P, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.setHeader('Set-Cookie', ['widget_session=abc123', 'SameSite=Strict', 'Secure']);
            try {
                if (P) {
                    this.P = P;
                }
                else {
                    this.P = 1;
                }
                const [calligraphy, count] = yield this.uploadService.homeFindAll({
                    P: this.P,
                    pageSize: this.pageSize,
                });
                this.totalCount = count;
                if (calligraphy.length === 0) {
                    this.calligraphyList = [];
                    this.msg = '暂无数据！';
                    this.isShowPagination = false;
                }
                else {
                    this.isShowPagination = true;
                    this.calligraphyList = JSON.stringify(calligraphy);
                    this.msg = null;
                }
            }
            catch (e) {
                this.calligraphyList = null;
                this.msg = '请求异常！';
            }
            let data = {
                title: '最新文章',
                calligraphyList: this.calligraphyList,
                P: this.P,
                pageSize: this.pageSize,
                totalCount: this.totalCount,
                isShowPagination: this.isShowPagination,
            };
            return { msg: this.msg, data: data };
        });
    }
};
__decorate([
    common_1.Get(),
    common_1.Render('calligraphy/calligraphy'),
    __param(0, common_1.Query('P')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CalligraphyController.prototype, "root", null);
CalligraphyController = __decorate([
    common_1.Controller('calligraphy'),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], CalligraphyController);
exports.CalligraphyController = CalligraphyController;
