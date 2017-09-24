class mayBe {
  constructor() {
  }

  is(...args) {
    return args[0] && args[1]
  }

  not(...args) {
    return !args[0] && args[1]
  }

  so(...args){
    return args[0] && args[1] || !args[0] && args[2]
  }

}

module.exports = new mayBe