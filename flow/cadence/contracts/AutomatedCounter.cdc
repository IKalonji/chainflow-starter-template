// AutomatedCounter.cdc
//
// Welcome to ChainFlow! This is one of the simplest programs you can deploy to see how it works.
//
// The AutomatedCounter contract contains two variables (UInt) and two functions to increment the values.
//
// Follow the ChainFlow project to learn more: https://github.com/IKalonji/chainflow

pub contract AutomatedCounter {

    // Declare a public field of type UInt.
    //
    // All fields must be initialized in the init() function.

    pub var firstNumber: UInt256
    pub var secondNumber: UInt256

    // The init() function is required if the contract contains any fields.
    init() {
        self.firstNumber = 0
        self.secondNumber = 5
    }

    // Public function that returns our friendly greeting!
    pub fun addOneToFirstNumber() {
        self.firstNumber = self.firstNumber + 1
    }

    // Public function that returns our friendly greeting!
    pub fun addFiveToSecondNumber() {
        self.secondNumber = self.secondNumber + 5
    }
}