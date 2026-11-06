"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransacoesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const transacao_schema_1 = require("./transacao.schema");
const transacoes_controller_1 = require("./transacoes.controller");
const transacoes_service_1 = require("./transacoes.service");
let TransacoesModule = class TransacoesModule {
};
exports.TransacoesModule = TransacoesModule;
exports.TransacoesModule = TransacoesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: transacao_schema_1.Transacao.name, schema: transacao_schema_1.TransacaoSchema }]),
        ],
        controllers: [transacoes_controller_1.TransacoesController],
        providers: [transacoes_service_1.TransacoesService],
    })
], TransacoesModule);
//# sourceMappingURL=transacoes.module.js.map