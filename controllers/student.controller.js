const { request, response } = require("express");

const ctrlHome = {};

const Student = require('../models/student.js');

ctrlHome.rutaDB = async (req = request, res = response) => {
    try {
        const student = await Student.find();
        res.json({
            msg: "Los alumnos inscriptos son:",
            student
        });
    } catch (error) {
        console.log('Error al mostrar los datos de los alumnos: ', error);
    }
};

ctrlHome.rutaGet = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        const student = await Student.findById(id);
        res.json({
            student
        });
    } catch (error) {
        console.log('Error al mostrar los datos del alumno: ', error);
    }
};

ctrlHome.rutaPost = async (req = request, res = response) => {
    const body = req.body;
    try {
        const student = new Student(body);
        await student.save();
        res.json({
            msg: 'Alumno agregado exitosamente',
            student
        });
    } catch (error) {
        console.log('Error al guardar los datos del alumno: ', error);
    };
};

ctrlHome.rutaPut = async (req = request, res = response) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const student = await Student.findByIdAndUpdate(id, body, {new: true})
        res.json({
            msg: "Datos del alumno actualizados exitosamente",
            student
        });
    } catch (error) {
        console.log('Error al actualizar los datos del alumno: ', error);
    }
};

ctrlHome.rutaDelete = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        await Student.findByIdAndDelete(id)
        res.json({
            msg: "Alumno borrado de la base de datos exitosamente"
        });
    } catch (error) {
        console.log('Error al borrar los datos del alumno: ', error);
    }
};

module.exports = ctrlHome;