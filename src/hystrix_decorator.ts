import { commandFactory } from 'hystrixjs';

type hystrixDecoratorType = {
  circuitBreakerSleepWindowInMilliseconds?: number,
  errorHandler?: string,
  timeout?: number,
  circuitBreakerRequestVolumeThreshold?: number,
  circuitBreakerForceOpened?: boolean,
  circuitBreakerForceClosed?: boolean,
  circuitBreakerErrorThresholdPercentage?: number,
  statisticalWindowLength?: number,
  statisticalWindowNumberOfBuckets?: number,
  percentileWindowNumberOfBuckets?: number,
  percentileWindowLength?: number,
  requestVolumeRejectionThreshold?: number,
  fallbackTo?: string
}


const Hystrix = (hystrixObject: hystrixDecoratorType) => {
  let serviceCommand;
  return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    console.log(target);
    if (!serviceCommand) {
      const decoratedMethod = descriptor.value;
      serviceCommand = commandFactory.getOrCreate('propertyKey');
      serviceCommand.run(decoratedMethod);
      if (hystrixObject.circuitBreakerSleepWindowInMilliseconds) serviceCommand.circuitBreakerSleepWindowInMilliseconds(hystrixObject.circuitBreakerSleepWindowInMilliseconds);
      if (hystrixObject.errorHandler) serviceCommand.errorHandler(target[hystrixObject.errorHandler]);
      if (hystrixObject.timeout) serviceCommand.timeout(hystrixObject.timeout);
      if (hystrixObject.circuitBreakerRequestVolumeThreshold) serviceCommand.circuitBreakerRequestVolumeThreshold(hystrixObject.circuitBreakerRequestVolumeThreshold);
      if (hystrixObject.circuitBreakerForceOpened) serviceCommand.circuitBreakerForceOpened(hystrixObject.circuitBreakerForceOpened);
      if (hystrixObject.circuitBreakerForceClosed) serviceCommand.circuitBreakerForceClosed(hystrixObject.circuitBreakerForceClosed);
      if (hystrixObject.circuitBreakerErrorThresholdPercentage) serviceCommand.circuitBreakerErrorThresholdPercentage(hystrixObject.circuitBreakerErrorThresholdPercentage);
      if (hystrixObject.statisticalWindowLength) serviceCommand.statisticalWindowLength(hystrixObject.statisticalWindowLength);
      if (hystrixObject.statisticalWindowNumberOfBuckets) serviceCommand.statisticalWindowNumberOfBuckets(hystrixObject.statisticalWindowNumberOfBuckets);
      if (hystrixObject.percentileWindowNumberOfBuckets) serviceCommand.percentileWindowNumberOfBuckets(hystrixObject.percentileWindowNumberOfBuckets);
      if (hystrixObject.percentileWindowLength) serviceCommand.percentileWindowLength(hystrixObject.percentileWindowLength);
      if (hystrixObject.requestVolumeRejectionThreshold) serviceCommand.requestVolumeRejectionThreshold(hystrixObject.requestVolumeRejectionThreshold);
      if (hystrixObject.fallbackTo) serviceCommand.fallbackTo(target[hystrixObject.fallbackTo]);
      serviceCommand = serviceCommand.build();
    }
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const result = serviceCommand.execute(args);
      return result;
    };
    return descriptor;
  }
}

export default Hystrix;
