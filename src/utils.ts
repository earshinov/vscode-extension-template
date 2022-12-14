/**
 * Wraps the given function so that each invocation is executed inside a try-catch block.
 *
 * Caught exceptions are logged and re-thrown.
 */
/* eslint-disable space-before-function-paren */
export function catchErrors<T extends (...args: any[]) => void>(fn: T): T {
  return ((...args: Parameters<T>) => {
    try {
      return fn(...args);
    } catch (e) /* istanbul ignore next */ {
      console.error(e);
      throw e;
    }
  }) as any;
}
