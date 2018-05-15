import Hystrix from './hystrix_decorator';

describe('hystrixDecorator', () => {
  it('should test', () => {
    class Test {

      @Hystrix({errorHandler: 'myMethodErrorHandler'})
      myMethod() {
        throw new Error('vish');
      }

      myMethodErrorHandler() {
        console.log('deu pau');
      }
    }

    new Test().myMethod();
    const spy = jest.spyOn(console, 'log');
  });
})
