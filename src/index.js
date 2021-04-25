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

/*
async function getUserWithTask(){
  try{
    const result = await User.findAll({
      limit: 10,
      attributes: {exclude: ['password']}
    });
    return result.map(item => item.get());
  }catch(e){}
}

getUserWithTask().then(console.log);

async function getTasksWithOwner(){
  try{
    const result = await Task.findAll({
      limit: 10,
      where: {
        isDone: true,
      },
      include: [
        {
          model: User,
          as: 'owner'
        }
      ]
    });
    return result.map(item => item.get());
  }
}
*/

//trasaction
/*
import { CreditCard, sequelize } from './db/models';
async function card_transaction(fromCardId, toCardId, value){
    try {
      const fromCard = await CreditCard.findByPk(fromCardId);
      const toCard = await CreditCard.findByPk(toCardId);

      console.log('Before transaction:');
      console.log(fromCard.get());
      console.log(toCard.get());

      const tr = await sequelize.transaction();
      fromCard.balance -= value;
      const updatedFromCard = await fromCard.save({ transaction: tr });
      toCard.balance += value;
      const updatedToCard = await toCard.save({ transaction: tr });
      await tr.commit();

      console.log('After transaction:');
      console.log(fromCard.get());
      console.log(toCard.get());
    } catch (e) {
      console.error(e);
  }
}

card_transaction(1,2, 2000);*/

//EXPRESS

import express from 'express';
//import { user } from './db/models';
import router from './routes';


//const PORT = process.env.PORT || 5000;
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(router);

/*app.post('/user', async (req, res, next)=>{
  try{
    const createdUser = await User.create(req.body);
    return res.send(createdUser);
    //console.log(req.body);
  } catch (e) {
    next(e);
  }
});
app.use(function(err,req,res, next){
  console.log(err.stack);
  res.status(500).send('Smith broken!');
});*/

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});