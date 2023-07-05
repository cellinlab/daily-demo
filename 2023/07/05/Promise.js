const STATE = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

function TinyPromise(fn) {
  const self = this;
  self.state = STATE.PENDING;
  self.value = null;
  self.resolvedCallbacks = [];
  self.rejectedCallbacks = [];

  function resolve(value) {
    if (self.state === STATE.PENDING) {
      self.state = STATE.RESOLVED;
      self.value = value;
      self.resolvedCallbacks.forEach((callback) => {
        callback(value);
      });
    }
  }

  function reject(value) {
    if (self.state === STATE.PENDING) {
      self.state = STATE.REJECTED;
      self.value = value;
      self.rejectedCallbacks.forEach((callback) => {
        callback(value);
      });
    }
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
TinyPromise.prototype.then = function (onResolved, onRejected) {
  const self = this;
  onResolved = typeof onResolved === 'function' ? onResolved : (value) => value;
  onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };

  if (self.state === STATE.PENDING) {
    self.resolvedCallbacks.push(onResolved);
    self.rejectedCallbacks.push(onRejected);
  }

  if (self.state === STATE.RESOLVED) {
    onResolved(self.value);
  }

  if (self.state === STATE.REJECTED) {
    onRejected(self.value);
  }
}
TinyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
}

function test() {
  try {
    const p1 = new TinyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve('p1');
      }, 1000);
    });

    p1.then((value) => {
      console.log('p1 resolved', value);
    });

    const p2 = new TinyPromise((resolve, reject) => {
      setTimeout(() => {
        reject('p2');
      }, 2000);
    });

    p2.then((value) => {
      console.log('p2 resolved', value);
    }, (error) => {
      console.log('p2 rejected', error);
    });

    const p3 = new TinyPromise((resolve, reject) => {
      setTimeout(() => {
        reject('p3');
      }, 3000);
    });

    p3.catch((error) => {
      console.log('p3 rejected', error);
    });
  } catch (e) {
    console.log(e);
  }
}

test();