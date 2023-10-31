## Table of Contents

1. [Naming Conventions](#naming-conventions)
2. [Code Structure](#code-structure)
3. [Functions](#functions)
4. [Classes and Components](#classes-and-components)
5. [Comments](#comments)
6. [Error Handling](#error-handling)
7. [Commit Messages](#commit-messages)
8. [Branch Naming](#branch-naming)

---

## Naming Conventions

### Variables

- Use `camelCase` for variable names. 
  - **Good**: `let userAge = 25;`
  - **Bad**: `let UserAge = 25;`

### Functions

- Function names should be verbs and describe what the function does. Use `camelCase` as well.
  - **Good**: `function getUserData() {}`
  - **Bad**: `function data() {}`

### Classes

- Class names should be nouns and use `PascalCase`.
  - **Good**: `class UserAccount {}`
  - **Bad**: `class userAccount {}`

---

## Code Structure

- **Indentation**: Use 2-space indentation.
- **Maximum Line Length**: Limit lines to 80 characters.

---

## Functions

- **Single Responsibility**: One function should do one thing, and do it well.
- **Length**: Limit functions to a maximum of 10 lines of code.
- **Arguments**: No more than 3 arguments. If you need more, use an object.

---

## Classes and Components

- **Single Responsibility**: One class/component for each noun in your problem domain.
- **Length**: Keep classes under 100 lines of code.
- **Methods**: Limit to under 10 lines of code.

---

## Comments

- Write meaningful comments. If the code needs explaining, you should probably refactor.
- Use `TODO:` for code that is temporary, a short-term solution, or good-enough but not perfect.

---

## Error Handling

- Use try-catch for runtime errors and avoid using error codes.
- Always log the errors.

---

## Commit Messages

- **Sentence Completion**: Every commit message should complete the sentence "This commit will..." and include the parent ticket number and, if applicable, the subtask number. 
  - **Good**: `JIRA-1234 JIRA-6574 TAdd validation to the login form` (1234 parent task, 6574 is the subtask)
  - **Good** `JIRA-1234 Add validation to the login form`
  - **Bad**: `Login Form Validation`

- **Jira Ticket Number**: Include the Jira ticket number at the end of the commit message.
  - **Example**: `- JIRA-1234 This commit will fix button alignment issues `

- **No Periods**: Do not end your commit messages with a period.
  - **Good**: `This commit will improve performance`
  - **Bad**: `This commit will improve performance.`

- **Imperative Mood**: Write your commit messages in the imperative mood.
  - **Good**: `Add` or `Fix`
  - **Bad**: `Added` or `Fixing`

---

## Branch Naming

- **Prefixes**: All branch names must begin with one of the following prefixes:
  - `bugfix/`
  - `hotfix/`
  - `feature/`
  - `task/`

- **Jira Ticket**: Include the Jira ticket number.
  - **Example**: `feature/jira-1234-add-login`

- **Personal Branches**: If it's a sandbox or playground branch, use your name as a prefix.
  - **Example**: `alex/experiment-with-react-hooks`

---
