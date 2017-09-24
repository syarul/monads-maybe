class mayBe {
  constructor() {
  }

  is(...args) {
    return args[0] && args[1] || args[2] || false
  }

  not(...args) {
    return !args[0] && args[1] || args[2] || false
  }

  so(...args){
    return args[0] && args[1] || !args[0] && args[2] || false
  }

}

module.exports = new mayBe