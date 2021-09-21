const { model, Schema } = require('mongoose');

const StudentSchema = new Schema({
    datos_personales: {
        nombre: {
            type: String,
            required: [true, 'El nombre es necesario']
        },
        apellido: {
            type: String,
            required: [true, 'El apellido es necesario']
        },
        direccion: {
            calle: {
                type: String,
                required: [true, 'La calle es necesaria']
            },
            ciudad: {
                type: String,
                required: [true, 'La ciudad es necesaria']
            },
            codigo_postal: {
                type: Number,
                required: [true, 'La ciudad es necesaria']
            }
        },
        correo: {
            type: String,
            unique: [true, 'El correo está duplicado'],
            required: [true, 'El correo es necesario']

        },
        numero_telefono: [{
            type: String,
            unique: [true, 'El número de teléfono está duplicado'],
            required: [true, 'El número de teléfono es necesario']
        }],
        genero: { type: Number, min: 0, max: 2 },
        religion: {
            type: String,
            required: [true, 'La religión es necesaria']
        },
        nacionalidad: {
            pais: {
                type: String,
                required: [true, 'El pais de nacimiento es necesario']
            },
            provincia: {
                type: String,
                required: [true, 'La provincia de nacimiento es necesaria']
            },
            ciudad: {
                type: String,
                required: [true, 'La ciudad de nacimiento es necesaria']
            }
        }
    },
    tutor: [{
        nombre: {
            type: String,
            required: [true, 'El nombre es necesario']
        },
        apellido: {
            type: String,
            required: [true, 'El apellido es necesario']
        },
        direccion: {
            calle: {
                type: String,
                required: [true, 'La calle es necesaria']
            },
            ciudad: {
                type: String,
                required: [true, 'La ciudad es necesaria']
            },
            codigo_postal: {
                type: Number,
                required: [true, 'La ciudad es necesaria']
            }
        },
        correo: {
            type: String,
            unique: [true, 'El correo está duplicado'],
            required: [true, 'El correo es necesario']

        },
        numero_telefono: [{
            type: String,
            unique: [true, 'El número de teléfono está duplicado'],
            required: [true, 'El número de teléfono es necesario']
        }],
        genero: { type: Number, min: 0, max: 2 }
    }],
    informacion_academica: [{
        institucion: {
            type: String,
            required: true
        },
        desde: {
            type: String,
            required: true
        },
        hasta: {
            type: String,
            required: true
        }
    }],
    experiencia_laboral: [{
        lugar: {
            type: String,
            required: true
        },
        desde: {
            type: String,
            required: true
        },
        hasta: {
            type: String,
            required: true
        }
    }],
    conocimientos: [
        String
    ],
    redes: [
        String
    ],
    hobbies: [
        String
    ],
    alergias: [
        String
    ],
    regimen_alimentario: {
        type: String
    }
});

module.exports = model('Student', StudentSchema);