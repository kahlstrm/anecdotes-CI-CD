# Anecdotes Reducer
A simple monorepo fullstack app for storing and voting on anecdotes with heroku deployment.
## Commands
Clone using

    git clone git@github.com:kqlski/anecdotes.git

Then run `npm install` inside the project folder.

`npm test` for frontend testing.

`npm run test:e2e` for Cypress tests, do this while having `npm run start-test` running on the background.

For E2E and backend testing you need mongodb-connection uris stored in .env, `MONGODB_URI` for the production database and `MONGODB_URI_TEST` for the testing database.
