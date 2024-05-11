import mongoose, { Schema, Document, Model } from 'mongoose';


export interface IService {
    name: string;
    cost: number
}

const serviceSchema: Schema = new Schema({
    name: String,
    cost: Number,
});

const ServiceModel: Model<IService> = mongoose.model<IService>('services', serviceSchema);

export { ServiceModel };
