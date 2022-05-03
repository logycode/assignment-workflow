# assignment-workflow

## Project description

### Instructions

- create a simple workflow that guides a user through a "checkout process” and collects data.
- the workflow should contain three steps:

  1. Introduction "slide", read only
  2. Simple form that collects user's first name, last name and GitHub username (all fields are required)
  3. Simple form that collects user's email and has an "Agree to Terms and Services" checkbox (both required)

- after the user finished all three steps you query the GitHub User API with the help of the username which was collected beforehand and display the collected data of your form with the user avatar image of GitHub
- each step/slide should have "back" and "next" buttons
- "Next" button should be disabled if the input on the current step is invalid
- the form should handle errors and basic validations

### Bonus

- the workflow can also be browsed using the native browser's "back" / "next" buttons
- animate workflow transitions
- add tests to your project

### Additional Information

- API endpoints needed - Users.
- an example for a user: https://api.github.com/users/vuejs
- feel free to use any other open API, that could make the assignment better/easier.

### General guidelines

- Please use VueJS (and needed ecosystem) to build the task.
- The code should be readable and clearly commented if needed.
- The project should be pushed to a public GitHub repository.
- You can use all the open source libraries you need, but keep it sane 😁 Please don't use CSS frameworks.
- README.md should contain a project documentation.
  - how to run and build the project locally from scratch
  - project structure
  - gotchas
  - anything worth mentioning
- The project should all modern browsers (current version - 1). IE11 can be omitted.
- The UI should be responsive.
- HTML should be semantic.

### Evaluation Criteria

- UX / UI: Does the workflow adapt well to different devices (mobile / desktop) in terms of user experience and design?
- Code Quality: Is the code clean, consistent, well-structured and easy to understand? Do you demonstrate a good understanding of ES6 (and further) & semantic HTML?
- Performance: Is the application running smoothly? How does it work with a slow internet connection? Does the UI render quickly? Are the choices of libraries etc. appropriate for the given task?
- Questions: Asking questions is good. If there is unclarity, we prefer to spend some time discussing the problem rather than building the wrong thing the whole day.

## Project setup

```

npm install

```

### Compiles and hot-reloads for development

```

npm run serve

```

### Compiles and minifies for production

```

npm run build

```

### Lints and fixes files

```

npm run lint

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```

```
