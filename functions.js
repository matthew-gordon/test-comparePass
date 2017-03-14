'use strict';

const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePassword) {
  const bool = bcrypt.compareSync(userPassword, databasePassword);
  if(!bool) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  comparePass
};
