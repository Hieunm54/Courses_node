export function MultiMongooseToObjects(mongoose) {
    return mongoose.map(m => m.toObject());
}
export function SingleMongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}
