import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema(
  {
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
    path: {
      // relative path
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    id: false
  }
);
