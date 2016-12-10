# Challenge prototype

## Concept
The "Big Picture" is creating a repository where:

* as a user I can fork the repository
* as a user I can browse throughone or more challenges in the challenges directory
* as a user, I can participate in a challenge by copying the demo subdirectory to a subdirectory named the same as my github username, replace all instances of the word demo with my username in the source.js and source.spec.js files in my directory
* as a user, once I have my own directory setup, I can solve the challenges in the source.js file, making them pass the tests in source.spec.js
* as a user, once my solutions pass the tests in source.spec.js, I can commit my changes to my fork of the repository, push my changes, and then issue a request to pull the changes in my branch into the main repository

## The build process should:

* run all tests for all user submissions
* generate test reports for each challenge

## The site should:

* be static - all report generation should happen as part of the Travis-CI deployment process
* provide an index page with instructions on how to participate
* provide an index of all the challenges on the index page
* each challange should have a dedicated page which describes the challenge, provides links to any support materials, and provides a link to the most recent run of the test suite for that challenge


## Notes:

### To run the tests, you'll need node.js, mocha, gulp and lite-server installed    

* `npm intall`- once you've forked the repo and cloned your fork down to your PC    
* `npm run-script dev` - to run tests and spool up a localhost showing the results
* `npm run-script test` - to only run tests
* `npm run-script local-serve` - to only spool up a localhost showing the results

### Stuff that's happening in the background

* gulp is handling tasks
* mocha is running tests
* mochawesome is turning the tests into awesome html pages
* there are a few bare bones html files in place to link up all the mochawesome reports