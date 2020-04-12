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
const reply_service_1 = require("../../replyComment/reply.service");
const utils_1 = require("../../common/utils");
let ReplyController = class ReplyController {
    constructor(replyService) {
        this.replyService = replyService;
    }
    create(body, req) {
        const userObj = req.user;
        console.log(userObj, '************');
        const userInfo = utils_1.getCookie(req.cookies.user_log_info);
        body.userId = userObj.userId || userInfo.userId;
        return this.replyService.save(body);
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('pc/submitReplyComment'),
    __param(0, common_1.Body()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ReplyController.prototype, "create", null);
ReplyController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [reply_service_1.ReplyService])
], ReplyController);
exports.ReplyController = ReplyController;
