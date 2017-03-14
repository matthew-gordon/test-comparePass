'use strict';


const chai = require('chai');
const should = chai.should();
const bcrypt = require('bcryptjs');
const functions = require('../functions');

describe('comparePass()', () => {
    it('should return true if the password is correct', (done) => {
     const salt = bcrypt.genSaltSync();
     const hash = bcrypt.hashSync('test', salt);
     const results = functions.comparePass('test', hash);
     should.exist(results);
     results.should.eql(true);
     done();
    });
    it('should return false if the password is incorrect', (done) => {
     const salt = bcrypt.genSaltSync();
     const hash = bcrypt.hashSync('test', salt);
     const results = functions.comparePass('testing', hash);
     should.exist(results);
     results.should.eql(false);
     done();
    });
  });
