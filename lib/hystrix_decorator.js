"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hystrixjs_1 = require("hystrixjs");
var Hystrix = function (hystrixObject) {
    var serviceCommand;
    return function (target, propertyKey, descriptor) {
        if (!serviceCommand) {
            var decoratedMethod = descriptor.value;
            serviceCommand = hystrixjs_1.commandFactory.getOrCreate('propertyKey');
            serviceCommand.run(decoratedMethod);
            if (hystrixObject.circuitBreakerSleepWindowInMilliseconds)
                serviceCommand.circuitBreakerSleepWindowInMilliseconds(hystrixObject.circuitBreakerSleepWindowInMilliseconds);
            if (hystrixObject.errorHandler)
                serviceCommand.errorHandler(target[hystrixObject.errorHandler]);
            if (hystrixObject.timeout)
                serviceCommand.timeout(hystrixObject.timeout);
            if (hystrixObject.circuitBreakerRequestVolumeThreshold)
                serviceCommand.circuitBreakerRequestVolumeThreshold(hystrixObject.circuitBreakerRequestVolumeThreshold);
            if (hystrixObject.circuitBreakerForceOpened)
                serviceCommand.circuitBreakerForceOpened(hystrixObject.circuitBreakerForceOpened);
            if (hystrixObject.circuitBreakerForceClosed)
                serviceCommand.circuitBreakerForceClosed(hystrixObject.circuitBreakerForceClosed);
            if (hystrixObject.circuitBreakerErrorThresholdPercentage)
                serviceCommand.circuitBreakerErrorThresholdPercentage(hystrixObject.circuitBreakerErrorThresholdPercentage);
            if (hystrixObject.statisticalWindowLength)
                serviceCommand.statisticalWindowLength(hystrixObject.statisticalWindowLength);
            if (hystrixObject.statisticalWindowNumberOfBuckets)
                serviceCommand.statisticalWindowNumberOfBuckets(hystrixObject.statisticalWindowNumberOfBuckets);
            if (hystrixObject.percentileWindowNumberOfBuckets)
                serviceCommand.percentileWindowNumberOfBuckets(hystrixObject.percentileWindowNumberOfBuckets);
            if (hystrixObject.percentileWindowLength)
                serviceCommand.percentileWindowLength(hystrixObject.percentileWindowLength);
            if (hystrixObject.requestVolumeRejectionThreshold)
                serviceCommand.requestVolumeRejectionThreshold(hystrixObject.requestVolumeRejectionThreshold);
            if (hystrixObject.fallbackTo)
                serviceCommand.fallbackTo(target[hystrixObject.fallbackTo]);
            serviceCommand = serviceCommand.build();
        }
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = serviceCommand.execute(args);
            return result;
        };
        return descriptor;
    };
};
exports.default = Hystrix;
