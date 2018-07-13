"use strict";

let Connection = require("./lib/connection");
let Pool = require("./lib/pool");

let ConnOptions = require("./lib/config/connection-options");
let PoolOptions = require("./lib/config/pool-options");

module.exports.createConnection = function createConnection(opts) {
  try {
    let options = new ConnOptions(opts);
    const conn = new Connection(options);
    return conn.connect();
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports.createPool = function createPool(opts) {
  const options = new PoolOptions(opts);
  const pool = new Pool(options);
  pool.activatePool();
  return pool;
};

// exports.createPoolCluster = function createPoolCluster(config) {
//   //TODO
// };