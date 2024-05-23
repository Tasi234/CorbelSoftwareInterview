# Software Engineering Take-Home Exam

Welcome to your take-home exam for the Software Engineering position. This project is a simple web application with a React frontend and a C# ASP.NET backend.

Your task is to identify and fix bugs to make the application run correctly.

The goal is to test you have a basic understanding of Git, C#, Node, Typescript, ReactJS (hooks and context), Dependency Injection.

## Getting Started

It is assumed you'll have the following installed:

- Node.js and npm (https://nodejs.org/) (Or Bun)
- .NET Core SDK (https://dotnet.microsoft.com/download)

You will need to get the front-end setup and running first (UI folder), then start the backend.

Review the package.json
Don't forget to npm install or bun install.

The UI is proxied through the backend, so both will need to be running.

UI Should be accessed from http://localhost:3000/

## Hints


Unable to resolve service for type 'XXXX' while attempting to activate 'XXXX'.
Hint: Review the class that is being activated and check dependency injection at startup

ArgumentException: The value cannot be an empty string. (Parameter 'path')
Which service is this error being thrown in? Is it looking for a certain file?

