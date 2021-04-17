const {User} = require ('./db/models');
const bcrypt = require('bcrypt');
/*
User.create({
    firstName: 'Test',
    lastName: 'Test',
    email: 'test@gmail.com'
}).then(console.log);
*/

//User.findByPk(1).then(console.log);

const fun_hash_passw = async password => {
    try{
        return bcrypt.hash(password, 10);
    } catch (e) { throw e;}
};

const createUser = async data => {
    try{
        data.passwordHash = await fun_hash_passw(data.password);
        const createsUser = await User.create(data);
        if (createUser){
            return createUsers.length();
        }
        throw new Error();
    } catch(e) {
        throw e;
    }
};

createUser(
    {
        firstName: 'test101',
        lastName: 'Surname101',
        email: 'test101@gmail.com',
        login: 'userlogin101',
        password: 'qwerty123',
    }
).then(console.log).catch(console.err);

