# Hail, Coder!

And welcome to the second of your tedious challenges. Your goal for this exercise is to get this dumb API endpoint working. There are several errors in this codebase, both obvious and not-so-obvious. See if you can solve all of them before the time is up.

## The Final Goal
The endpoint should return a list of three users with a 200 status code. After making the fixes, push to a new branch and create a pull request into master.

## Running the Codebase
To run this project, you have options:
- run `serverless offline start` in a terminal at the project's root directory
- run `npm start` in the same directory
The code will need to recompile every time you make a change, so keep that in mind; no hot-reloading like you get with create-react-app.

## Testing your code
You'll need an api tool to aid you in your quest -- my preference is Postman, but feel free to use any you're comfortable with.
- Your endpoint will be at `http://localhost:3000/challenge/get`. This takes a POST command, and is set up as a RESTful API -- so it expects to receive and will return JSON.

## Final Thoughts
I will give you a rundown of this codebase before you start working on it, so don't be afraid if you don't understand what you're seeing at first glance. Ask questions, research stuff, and have fun!