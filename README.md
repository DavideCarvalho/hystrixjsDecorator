# HystrixJsDecorator
> TypeScript Decorator for HystrixJS

## Install
- `yarn add hystrixjs_decorator`


or


- `npm i hystrixjs_decorator`

## Using
```typescript
import Hystrix from 'hystrixjs_decorator';
```

Now you can create your class and annotate your methods with it!

Hystrix annotation receives the hystrixjs methods as a json properties, e.g:


```typescript
class myClass{

  @Hystrix({errorHandler: 'myMethodErrorHandler'})
  myMethod() {
    throw new Error('forcing myMethodErrorHandler()');
  }

  myMethodErrorHandler() {
    console.log('something bad happened, so myMethodErrorHandler() was called');
  }
}
```

If you don't know what are the configurations and what each of them do, here's them:

- circuitBreakerSleepWindowInMilliseconds - how long the circuit breaker should stay opened, before allowing a single request to test the health of the service
- errorHandler - function to validate if the error response from the service is an actual error. If this function returns an error object (default implementation), this request call will be marked as failure, which will influence the error percentage. If it returns null or false, the call will not be marked as failure. An example could be a 404 error, if the customer is not found.
timeout for request
- circuitBreakerRequestVolumeThreshold - minimum number of requests in a rolling window that needs to be exceeded, before the circuit breaker will bother at all to calculate the health
- circuitBreakerForceOpened - force this circuit breaker to be always opened
- circuitBreakerForceClosed - force this circuit breaker to be always closed
- circuitBreakerErrorThresholdPercentage - error percentage threshold to trip the circuit
- statisticalWindowLength - length of the window to keep track of execution counts metrics (success, failure)
- statisticalWindowNumberOfBuckets - number of buckets within the statistical window
- percentileWindowNumberOfBuckets - number of buckets within the percentile window
percentileWindowLength - length of the window to keep track of execution times
requestVolumeRejectionThreshold - maximum number of concurrent requests, which can be executed. Defaults to 0, i.e. no limitation
- fallbackTo - function, which will be executed if the request fails. The function will be called with the error as the 1st argument and an array of the original args as the 2nd argument

You can see more about hystrixjs on its [npm package](https://www.npmjs.com/package/hystrixjs)
