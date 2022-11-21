
const Joi = require('joi');

const planetDataSchema = Joi.object().keys({
  nombre: Joi.string().alphanum().required(),
  periodo_rotacion: Joi.string().required(),
  periodo_orbital: Joi.string().required(),
  diametro: Joi.string().required(),
  clima: Joi.string().required(),
  gravedad: Joi.string().required(),
  terreno: Joi.string().required(),
  superficie_agua: Joi.string().required(),
  poblacion: Joi.string().required(),
  residentes: Joi.array().items(Joi.string().required()),
  peliculas: Joi.array().items(Joi.string().required()), 
  creado: Joi.string().length(27).required(),
  editado: Joi.string().length(27).required(),
  url: Joi.string().uri().required() 
});


module.exports = planetDataSchema;