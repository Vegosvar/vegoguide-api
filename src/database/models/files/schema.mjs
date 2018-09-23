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
      'application/msword', // .doc
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // .docx
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
