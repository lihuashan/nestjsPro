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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const uploadFile_entity_1 = require("../db/uploadFile.entity");
let UploadService = class UploadService {
    constructor(uploadFileRepository) {
        this.uploadFileRepository = uploadFileRepository;
    }
    save(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const uploadFile = new uploadFile_entity_1.UploadFile();
            uploadFile.name = req.name ? req.name : new Date().getTime();
            uploadFile.filename = req.filename;
            uploadFile.type = req.type;
            uploadFile.size = req.size;
            uploadFile.urlPath = req.urlPath;
            uploadFile.remark = req.remark ? req.remark : new Date().getTime();
            if (req.id)
                return Object.assign({}, uploadFile);
            return yield this.uploadFileRepository.save(uploadFile);
        });
    }
    remove(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const uploadFile = yield this.uploadFileRepository.findOne(req.id);
            yield this.uploadFileRepository.remove(uploadFile);
        });
    }
    update(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const uploadFile = yield this.uploadFileRepository.findOne(req.id);
            yield this.uploadFileRepository.update(uploadFile, Object.assign({}, req));
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.uploadFileRepository.find();
        });
    }
    homeFindAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.uploadFileRepository
                .createQueryBuilder('UploadFile')
                .orderBy("UploadFile.updated_time", "DESC")
                .skip((params.P - 1) * params.pageSize)
                .take(params.pageSize)
                .getManyAndCount();
        });
    }
};
UploadService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(uploadFile_entity_1.UploadFile)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UploadService);
exports.UploadService = UploadService;
