import bcryptjs from 'bcryptjs';
import mongoose from "mongoose";

//Crear SCHEMA o esquema de la tabla usuario
const userSchema = new mongoose.Schema({
    DNI: { type: String, required: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthdate: { type: Date, required: true },
    role: { type: String, required: true },
    cellPhone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userName: { type: String, required: true }
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject._v;
    }
})

//Encriptar password
userSchema.methods.encryptPassword = async (password) => {
    const saltRounds = 10;
    const salt = await bcryptjs.genSalt(saltRounds);
    const hash = await bcryptjs.hash(password, salt);

    return hash;
}

userSchema.methods.validatePassword = function (password) {
    return bcryptjs.compare(password, this.password);
}

//USER MODEL o Crear la coleccion
export const User = mongoose.model(
    'User', 
    userSchema
);/*El nombre debe ser siempre en singular User*/