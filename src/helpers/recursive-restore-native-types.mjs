import loopRecursively from './loop-recursively';
import restoreNativeTypes from './restore-native-types';

const recursiveRestoreNativeTypes = query =>
  loopRecursively(query, (value, key) => restoreNativeTypes(value, key));

export default recursiveRestoreNativeTypes;
