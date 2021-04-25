import Joi from '@hapi/joi';
export default Joi.object({
    firstName: Joi.string().pattern(/^[A-Z][a-z]{0,64}$/).required(),
    lastName: Joi.string().pattern(/^[A-Z][a-z]{0,64}$/).required(),
    email: Joi.string().email(),
    login: Joi.string().required(),
})