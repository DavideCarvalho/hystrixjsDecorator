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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hystrix_decorator_1 = __importDefault(require("./hystrix_decorator"));
describe('hystrixDecorator', function () {
    it('should test', function () {
        var Test = /** @class */ (function () {
            function Test() {
            }
            Test.prototype.myMethod = function () {
                throw new Error('vish');
            };
            Test.prototype.myMethodErrorHandler = function () {
                console.log('deu pau');
            };
            __decorate([
                hystrix_decorator_1.default({ errorHandler: 'myMethodErrorHandler' }),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], Test.prototype, "myMethod", null);
            return Test;
        }());
        new Test().myMethod();
        var spy = jest.spyOn(console, 'log');
    });
});
