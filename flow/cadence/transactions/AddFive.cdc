import AutomatedCounter from 0xc21858034c708090

transaction {

  prepare(acct: AuthAccount) {}

  execute {
    log(AutomatedCounter.addFiveToSecondNumber())
  }
}