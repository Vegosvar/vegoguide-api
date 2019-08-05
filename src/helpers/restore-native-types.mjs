import moment from 'moment';
import mongoose from 'mongoose';

const checkForHexRegExp = new RegExp(/^[0-9a-fA-F]{24}$/);
const uuidv4RegExp = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
const blackListedKeys = ['$regex'];

const restoreNativeTypes = (value, key) => {
  if (blackListedKeys.indexOf(key) !== -1) {
    return value;
  }

  const regexMatch = checkForHexRegExp.test(value);
  if (mongoose.Types.ObjectId.isValid(value) && regexMatch) {
    return new mongoose.Types.ObjectId(value);
  }

  if (
    String(value).toLowerCase() === 'true' ||
    String(value).toLowerCase() === 'false'
  ) {
    return String(value).toLowerCase() === 'true';
  }

  if (uuidv4RegExp.test(value)) {
    return value;
  }

  const numberValue = Number(value);
  if (!Number.isNaN(numberValue)) {
    return numberValue;
  }

  const dateValue = moment(value, [
    'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]',
    'YYYY-MM-DD'
  ]);

  if (dateValue.isValid()) {
    return dateValue.toDate();
  }

  return value;
};

export default restoreNativeTypes;
