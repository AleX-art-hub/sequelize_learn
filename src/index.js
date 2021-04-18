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

/*
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
*/

/*
const getUserById = async id => {
    try{
      return (await User.findByPk(id)).get();
    } catch(e) {
      throw e;
    }
};

getUserById(50).then(console.log). catch(console.error);
*/

/*
const updateUser = async (update_data, condition) => {
  try {
    await User.update(update_data, {
      where: condition,
    });
  } catch (e) {
    throw e;
  }
};

updateUser({ lastName: "Peterson" }, { lastName: "Surname0" }).then(console.log)
.catch(console.err);

const deleteUser = async (condition) => {
  try {
    await User.destroy({
      where: condition,
    });
  } catch (e) {
    throw e;
  }
};

deleteUser({ lastName: "Surname88" });
*/