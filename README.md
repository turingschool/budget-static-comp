# Budget App

This branch was created for a classes/object and Local Storage lesson.

## Set Up

- Clone down this repository
- Pull down this branch by running `git pull ls-lesson`

## Tasks

1. On line 15 in `script.js`, we invoke a function that adds a card. Before we do that, create an instance of a transaction. Then, pass that object to the `addCard` function.

2. Remove the two transaction cards that are hard coded into the HTML on lines `46-61`. Implement the use of a collection and local storage so that all cards are saved in storage and persist a page refresh.

3. Moving beyond storing a global array: The object stored in local storage can no longer be an array - it should be an object of key value pairs. It should include the following keys with the following data types:
  - username: string
  - totalIncome: number
  - totalExpenses: number
  - transactions: array
