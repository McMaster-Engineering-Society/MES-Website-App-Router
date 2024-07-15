# Migration Usage

## Compare and Create Collections

To compare and create collections between MongoDB instances, ensure you have the necessary environment variables set in a .env.local file located in the root directory of your project. Each MongoDB instance should have its own connection URI defined within this file:

`MONGODB_URI=mongodb://<username>:<password>@<hostname>:<port>`

Replace \<username\>, \<password\>, \<hostname\>, \<port\> with your MongoDB connection details for production, staging, and local environments.

## Command Syntax

`npm run migrate <source> <destination>`

\<source\>: Specifies the source environment (production, staging, or local).
\<destination\>: Specifies the destination environment (production, staging, or local).
Example
To compare collections between staging and production environments and create missing collections in production:

`npm run migrate staging production`

## Notes

Ensure MongoDB instances specified in .env.local are accessible and running before executing migration commands.
For the local environment, ensure your local MongoDB server (mongod) is running.
