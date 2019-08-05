const loopRecursively = (obj, cb, parentKey) => {
  if (!obj || typeof obj !== 'object') {
    return cb(obj, parentKey);
  }

  return Object.keys(obj).reduce((newObj, key) => {
    const value = obj[key];

    if (typeof value === 'object' && value !== null) {
      const prototype = Object.getPrototypeOf(value);
      if (Array.isArray(value)) {
        newObj[key] = value.map(subValue => loopRecursively(subValue, cb, key));
      } else if (prototype && prototype.constructor && prototype.constructor.name === 'Object') {
        newObj[key] = loopRecursively(value, cb, key);
      } else {
        newObj[key] = value;
      }
    } else {
      newObj[key] = cb(value, key);
    }

    return newObj;
  }, {});
};

export default loopRecursively;
