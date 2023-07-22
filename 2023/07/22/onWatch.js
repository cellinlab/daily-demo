const onWatch = (obj, setBind, getLogger) => {
  const handler = {
    get(target, property, receiver) {
      getLogger(target, property);
      if (typeof target[property] === 'object' && target[property] !== null) {
        return new Proxy(target[property], handler);
      } else {
        return Reflect.get(target, property, receiver);
      }
    },
    set(target, property, value, receiver) {
      setBind(value, property);
      return Reflect.set(target, property, value);
    }
  };

  return new Proxy(obj, handler);
};

const p = {
  name: 'Cell',
};


const pProxy = onWatch(
  p,
  (v, property) => {
    console.log(`监听到属性${property}改变为${v}`);
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`);
  }
);

pProxy.name = 'Cellinlab';
// 监听到属性name改变为Cellinlab
console.log(pProxy.name);
// 'name' = Cellinlab
// 'Cellinlab'