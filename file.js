const fs = require('fs')
const Promise = require("bluebird")

Promise.promisifyAll(fs)

module.exports = {
  directory: function (a) {
    // TODO Detect file existence
    // TODO Detect deep path
    // TODO Detect and set mode, owner and group
    // TODO Automatic tests for all of these cases
    return fs.mkdirAsync(a.path)
      .then(() => { changed: { path: a.path } })
  }
}
