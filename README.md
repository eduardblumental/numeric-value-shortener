# Numeric Value Shortener

## Project Description

This JavaScript project includes a module `valueShortener.test.js` which contains a utility function `shortening(value, desiredValueUnit)` for shortening numeric values to their equivalent representation in different units such as "K" (thousands), "M" (millions), "bn" (billions), and "T" (trillions).

The function takes two arguments: `value` and `desiredValueUnit`. The `value` is the numeric input you want to shorten, and the `desiredValueUnit` is the unit you want your input to be converted to. The function returns an object with the shortened value and the unit.

A series of automated tests are also included in `valueShortener.test.js` to ensure the function behaves as expected for different edge cases. The tests are written using Jest, a popular JavaScript testing framework.

## Prerequisites

To run this code and its tests, you need to have Node.js and npm installed on your machine. You can download and install them from [here](https://nodejs.org/).

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the dependencies listed in `package.json`.

## Running the Tests

To run the tests, simply use the command `npm test` in your terminal while in the project directory. This will start the Jest test runner and run all the tests defined in `valueShortener.test.js`.
