import { Schema } from 'mongoose';

export default new Schema({
  title: {
    type: String,
    required: true
  },
  mimeType: {
    type: String,
    enum: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
  },
  absolutePath: {
    type: String,
    required: true
  },
  relativePath: {
    type: String,
    required: true
  }
});
