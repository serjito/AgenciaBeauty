import { Schema, model, models } from 'mongoose';

const registerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es reqerido'],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'El email es reqerido'],
      trim: true,
    },
    telephone: {
      type: Number,
      required: [true, 'El teléfono es reqerido'],
    },
    terms: {
      type: Boolean,
      required: [true, 'Los términos son reqerido'],
    },
  },
  {
    timestamps: true,
  }
);

export default models.Register || model('Register', registerSchema);
