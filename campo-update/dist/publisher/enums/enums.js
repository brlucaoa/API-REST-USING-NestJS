"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusOperador = exports.statusMissao = void 0;
var statusMissao;
(function (statusMissao) {
    statusMissao["ABERTA"] = "ABERTA";
    statusMissao["ANDAMENTO"] = "ANDAMENTO";
    statusMissao["FECHADA"] = "FECHADA";
})(statusMissao || (exports.statusMissao = statusMissao = {}));
var statusOperador;
(function (statusOperador) {
    statusOperador["ATIVO"] = "ATIVO";
    statusOperador["TREINAMENTO"] = "TREINAMENTO";
    statusOperador["INCAPAZ_TEMPORARIO"] = "INCAPAZ_TEMPORARIO";
    statusOperador["INCAPAZ_PERMANENTE"] = "INCAPAZ_PERMANENTE";
})(statusOperador || (exports.statusOperador = statusOperador = {}));
//# sourceMappingURL=enums.js.map