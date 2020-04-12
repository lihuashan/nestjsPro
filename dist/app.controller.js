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
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth/auth.service");
const user_service_1 = require("./user/user.service");
let AppController = class AppController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const loginInfo = yield this.authService.login(req.user);
            const { access_token, userId, type, username } = loginInfo;
            const token = JSON.stringify({ access_token, userId, type, username });
            const userInfo = { access_token, userId, type, username };
            res.cookie('user_log_info', token, { expires: new Date(Date.now() + 3600000), httpOnly: true });
            res.json({ code: 200, data: userInfo, msg: '' });
        });
    }
    reg(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const isHas = yield this.userService.findOne(body.username);
            if (isHas) {
                return { code: 10001, data: null, msg: '用户名已经存在！' };
            }
            const user = yield this.userService.save(body);
            return this.login({ user }, res);
        });
    }
    logout(res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.cookie('user_log_info', '', { expires: new Date(0), httpOnly: true });
            res.json({ code: 200, data: null, msg: '您已退出登录！' });
        });
    }
    getProfile(req) {
        try {
            console.log(req.user);
            return req.user;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    root(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.login(req.user);
            console.log(user, '----------------');
            res.setHeader('Authorization', 'Bearer ' + user.access_token);
            return { msg: 'XX', data: user };
        });
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('local')),
    common_1.Post('login'),
    __param(0, common_1.Request()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    common_1.Post('reg'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "reg", null);
__decorate([
    common_1.Post('logout'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "logout", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('me'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('local')),
    common_1.Post('pc/login'),
    common_1.Render('home/index'),
    __param(0, common_1.Res()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "root", null);
AppController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, user_service_1.UserService])
], AppController);
exports.AppController = AppController;
