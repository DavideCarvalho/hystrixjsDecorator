declare const Hystrix: (hystrixObject: {
    circuitBreakerSleepWindowInMilliseconds?: number | undefined;
    errorHandler?: string | undefined;
    timeout?: number | undefined;
    circuitBreakerRequestVolumeThreshold?: number | undefined;
    circuitBreakerForceOpened?: boolean | undefined;
    circuitBreakerForceClosed?: boolean | undefined;
    circuitBreakerErrorThresholdPercentage?: number | undefined;
    statisticalWindowLength?: number | undefined;
    statisticalWindowNumberOfBuckets?: number | undefined;
    percentileWindowNumberOfBuckets?: number | undefined;
    percentileWindowLength?: number | undefined;
    requestVolumeRejectionThreshold?: number | undefined;
    fallbackTo?: string | undefined;
}) => (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
export default Hystrix;
