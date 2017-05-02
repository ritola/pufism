const exec = require('promise-exec')
const Promise = require("bluebird")
const R = require("ramda")

module.exports = {
  directory: function (a) {
    // TODO Make bluebird compatible exec
    // TODO Automatic tests for all of these cases
    const commands = [
      `mkdir --parents '${a.path}' --mode='${a.mode}'`,
      `chmod '${a.mode}' '${a.path}'`,
      `chown '${a.owner}.${a.group}' '${a.path}'`
    ]

    console.log(R.map(exec, commands))

    return Promise.each(R.map(exec, commands))
      .then(() => { return { commands } })
  }
}
