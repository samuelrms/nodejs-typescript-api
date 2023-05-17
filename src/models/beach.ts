import { IBeach } from '@src/services/forecast.types';
import mongoose, { Model } from 'mongoose';

const schema = new mongoose.Schema<IBeach>(
  {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const Beach: Model<IBeach> = mongoose.model('Beach', schema);
