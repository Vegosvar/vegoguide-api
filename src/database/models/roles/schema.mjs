import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema(
  {
    title: {
      en: {
        type: Schema.Types.ObjectId,
        ref: 'i18n',
      },
      sv: {
        type: Schema.Types.ObjectId,
        ref: 'i18n',
      },
    },
    privileges: {
      type: [Schema.Types.ObjectId],
      ref: 'privileges',
      required: true
    }
  },
  {
    timestamps: true,
    id: false
  }
);
