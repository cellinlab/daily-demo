const STATE = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

function TinyPromiseA(fn) {
  const self = this;
  self.state = STATE.PENDING;
  self.value = null;
  self.resolvedCallbacks = [];
  self.rejectedCallbacks = [];

  function resolve(val) {
    if (val instanceof TinyPromiseA) {
      return val.then(resolve, reject)
    }

    queueMicrotask(() => {
      if (self.state === STATE.PENDING) {
        self.state = STATE.RESOLVED
        self.value = val
        self.resolvedCallbacks.map((cb) => {
          cb(val)
        });
      }
    })
  }

  function reject(val) {
    queueMicrotask(() => {
      if (self.state === STATE.PENDING) {
        self.state = STATE.REJECTED
        self.value = val
        self.rejectedCallbacks.map((cb) => {
          cb(val)
        })
      }
    })
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

TinyPromiseA.prototype.then = function (onResolved, onRejected) {
  const self = this;
  onResolved = typeof onResolved === 'function' ? onResolved : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e };
  if (self.state === STATE.PENDING) {
    return (promise2 = new TinyPromiseA((resolve, reject) => {
      self.resolvedCallbacks.push(() => {
        try {
          const x = onResolved(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });

      self.rejectedCallbacks.push(() => {
        try {
          const x = onRejected(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }));
  }

  if (self.state === STATE.RESOLVED) {
    return (promise2 = new TinyPromiseA((resolve, reject) => {
      queueMicrotask(() => {
        try {
          const x = onResolved(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      })
    }));
  }

  if (self.state === STATE.REJECTED) {
    return (promise2 = new TinyPromiseA((resolve, reject) => {
      queueMicrotask(() => {
        try {
          const x = onRejected(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      })
    }));
  }
};
TinyPromiseA.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }

  let called = false;
  if (x instanceof TinyPromiseA) {
    if (x.state === STATE.PENDING) {
      x.then((y) => {
        resolvePromise(promise2, y, resolve, reject);
      }, reject);
    } else {
      x.then(resolve, reject);
    }
  } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const then = x.then;
      if (typeof then === 'function') {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (e) => {
            if (called) return;
            called = true;
            reject(e);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

TinyPromiseA.resolve = function (val) {
  return new TinyPromiseA((resolve, reject) => {
    resolve(val);
  });
}

TinyPromiseA.reject = function (val) {
  return new TinyPromiseA((resolve, reject) => {
    reject(val);
  });
}

TinyPromiseA.all = function (promises) {
  return new TinyPromiseA((resolve, reject) => {
    let count = 0;
    const result = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        result[i] = data;
        if (++count === promises.length) {
          resolve(result);
        }
      }, reject);
    }
  });
}

function test() {
  // 测试基本的Promise链式调用
  const p1 = new TinyPromiseA((resolve, reject) => {
    setTimeout(() => {
      resolve('p1');
    }, 1000);
  });

  p1.then((value) => {
    console.log('p1 resolved:', value);
    return 'p1 resolved';
  }).then((value) => {
    console.log('p1 then:', value);
  });

  // 测试Promise的错误处理
  const p2 = new TinyPromiseA((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('p2'));
    }, 2000);
  });

  p2.then((value) => {
    console.log('p2 resolved:', value);
  }).catch((error) => {
    console.log('p2 caught:', error.message);
  });

  // 测试Promise.all
  const p3 = new TinyPromiseA((resolve, reject) => {
    setTimeout(() => {
      resolve('p3');
    }, 1500);
  });

  const p4 = new TinyPromiseA((resolve, reject) => {
    setTimeout(() => {
      resolve('p4');
    }, 1000);
  });

  const p5 = TinyPromiseA.resolve('p5');

  TinyPromiseA.all([p3, p4, p5]).then((values) => {
    console.log('Promise.all:', values);
  });

  // 测试Promise.resolve和Promise.reject
  const p6 = TinyPromiseA.resolve('p6');
  const p7 = TinyPromiseA.reject(new Error('p7'));

  p6.then((value) => {
    console.log('p6 resolved:', value);
  });

  p7.catch((error) => {
    console.log('p7 caught:', error.message);
  });
}

test();
