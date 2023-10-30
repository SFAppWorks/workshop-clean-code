# Writing Clean Code Workshop

## Table of Contents
- [Introduction](#introduction)
- [Basics of Clean Code](#basics-of-clean-code)
- [Principles of Clean Code](#principles-of-clean-code)
- [Code Smells & How to Avoid Them](#code-smells--how-to-avoid-them)
- [Tools and Practices](#tools-and-practices)
- [Hands-On Session](#hands-on-session)
- [Q&A and Wrap-Up](#qa-and-wrap-up)
---

## Introduction
### Brief Intro

#### Readability 
Code is read way more often than it's written. Clean code makes it easier for anyone (including future you) to understand what the hell is going on.

#### Maintainability
The easier the code is to read, the easier it is to maintain. This saves time and headaches when you need to add features or fix bugs.

#### Collaboration
When you're working on a team, clean code ensures that everyone can understand and contribute to the codebase without a steep learning curve.

#### Reduced Debugging Time
It's way easier to spot issues in clean, well-organized code than in a jumbled mess.

#### Scalability
As your project grows, clean code practices make it easier to extend your codebase without running into complex bugs and architectural issues.

### Imagination Exercise
Imagine the worst code you've ever seen (or written). Now, with that code in mind, imagine the following situations:
- Merging two branches which have conflicts, where the code isn't clean? It's a nightmare. Clean code, with its modular design, reduces the complexity of merge conflicts.
- Let's say you've got a method that's 200 lines long and mixes database calls, calculations, and UI updates. Good luck finding and fixing a bug in that monstrosity. Clean code would separate these concerns, making debugging simpler.
- Being responsible for onboarding a new team members on that project: If you've got clean code, a new dev can jump in and start contributing much faster. In a messy codebase, they'll spend weeks just trying to figure out what's happening.
- The client decides they want a significant change, but your code is so tightly coupled that making one change breaks everything else. Clean code practices, like the SOLID principles, help you write code that can be easily changed. Even worse if the change is something seemingly small for the client and the change request comes before a release.
- Imagine going through a pull request where the code is messy and undocumented. It's hard to catch bugs and takes forever. Clean code is easier to review and thus more likely to catch issues before they hit production.

### Goal of the Workshop
By the end, everyone should know how to write code that's easier to read, maintain, and debug.

## Basics of Clean Code
### Why it Matters
Clean code isn't just a good practice; it's a long-term investment that pays off in multiple ways. Below are some key benefits for both individual developers and the entire team.

### Individual Benefits

#### 1. Easier Debugging

- **What**: Clean code is easier to read and understand.
- **Why It Matters**: Less time is spent searching for bugs, freeing you up for more valuable tasks.

#### 2. Skill Development

- **What**: Following clean code practices helps you understand best practices and design patterns.
- **Why It Matters**: This makes you a better programmer, boosting your problem-solving skills and understanding of the craft.

#### 3. Job Satisfaction

- **What**: Writing clean code can actually be satisfying.
- **Why It Matters**: Knowing you're doing quality work is a morale booster, making you more invested in your projects.

### Team Benefits

#### 1. Enhanced Collaboration

- **What**: Clean code makes it easier for team members to understand each other's work.
- **Why It Matters**: This streamlines collaboration, as devs can easily pick up where someone else left off.

#### 2. Onboarding Ease

- **What**: New team members can more quickly understand a clean codebase.
- **Why It Matters**: This shortens the onboarding period, allowing new hires to contribute faster.

#### 3. Code Reusability

- **What**: Clean code is generally more modular and follows DRY (Don't Repeat Yourself) principles.
- **Why It Matters**: This makes it easier to reuse code across projects, saving time and resources.

#### 4. Technical Debt Reduction

- **What**: Clean code is easier to maintain and less likely to accumulate technical debt.
- **Why It Matters**: This saves time and effort in the long run, as less time is spent refactoring and fixing issues.

- **Characteristics of Clean Code**: Readability, simplicity, and expressiveness.

## Principles of Clean Code
- **DRY (Don't Repeat Yourself)**: Explain it and show how to refactor repetitive code.
- **SOLID Principles**
  - S - Single Responsibility Principle (SRP)
    - https://bitbucket.org/sfaw/kickfin/src/master/services/mailer/index.js
    - https://bitbucket.org/sfaw/covia-mumble-dashboard/src/master/services/device-events.js
  - O - Open/Closed Principle (OCP)
  - L - Liskov Substitution Principle (LSP) - maybe separate workshop
  - I - Interface Segregation Principle (ISP)
  - D - Dependency Inversion Principle (DIP)
- **KISS (Keep It Simple, Stupid)**: Why simpler is usually better. - Booking code
- 
## Code Smells & How to Avoid Them
### What's a Code Smell
  - Long Method: A single method doing too much.
  - Large Class: A class that has too many responsibilities.
  - Feature Envy: A class that seems more interested in another class than in its own responsibilities.
  - Data Clumps: Several data items frequently appearing together in multiple places.
  - Duplicated Code: The same block of code existing in more than one place.
  - Dead Code: Code that's no longer being used.

### Common Smells
#### God Object
#### Long Method (see Booking.create method above)
#### Feature Envy
#### Data Clumps
#### Duplicated Code
#### Shotgun Surgery

## Tools and Practices
- **Linters and Formatters**: Tools that can help keep your code clean.
- **Code Reviews**: Why they're crucial for maintaining code quality.
- **Pair Programming**: Does it help or hinder writing clean code?

## Hands-On Session
- **Code Review Exercise**
- **Refactoring Exercise**:

## Q&A and Wrap-Up
- **Myths and Q&A**:
  - **`Clean Code Takes Longer to Write!`** Many think that writing clean code will slow them down. In the long term, it actually speeds up development by making code easier to read and maintain.
  - **`It's Just About Aesthetics!`** Some people think clean code is all about making code "pretty". It's really about making code more understandable and maintainable.
  - **`Only New Projects Need Clean Code!`** The thinking here is that legacy codebases are beyond saving. Not true. Even old code can be refactored and improved.
  - **`Clean Code is Universal!`** The myth that what's considered "clean" is the same for everyone. Different languages and frameworks may have different best practices.
  - **`It's Just for the Developer!`** Some think clean code is a developer's vanity project. In reality, it's about making life easier for the whole team, including testers and future maintainers.
  - **`It's Just Commenting and Naming!`** While those are important, clean code is about a lot more, like proper structure, modularity, and simplicity.
  - **`Automated Tools Will Make It Clean!`** Tools like linters can help, but they can't replace human judgment about code readability and design.
- **Additional Resources**:
  - "**Clean Code: A Handbook of Agile Software Craftsmanship**" by Robert C. Martin (Uncle Bob)
  - "**Refactoring: Improving the Design of Existing Code**" by Martin Fowler
  - "**Clean Architecture: A Craftsman's Guide to Software Structure and Design**" by Robert C. Martin
  - "**Code Complete**" by Steve McConnell