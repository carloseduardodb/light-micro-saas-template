# MicroSaaS Template with NestJS and Vite + Preact

This template is designed to provide a solid foundation for building **MicroSaaS** applications, combining the power of a **NestJS** backend with an integrated **Preact** frontend. While it's tailored specifically for microservice-oriented SaaS projects, it includes key elements that allow for scaling if necessary, especially when following best practices for file storage and management.

## Features

- **NestJS Backend**: A robust and extensible backend framework that offers built-in support for microservices and efficient application architecture.
- **Preact Frontend**: A fast and lightweight alternative to React, optimized for performance with the same component-based architecture.
- **TypeORM with PostgreSQL**: Integrated TypeORM with PostgreSQL as the default database, along with a complete migration setup using the latest version of TypeORM for easy database management and updates.
- **Scalability Considerations**: Though focused on microservices, the template is designed with scalability in mind, particularly in terms of file storage strategies.
  
## Technologies

- **NestJS**: Backend framework for building efficient and scalable server-side applications.
- **Preact**: Lightweight and efficient frontend framework.
- **TypeORM**: ORM for managing database schema and migrations.
- **PostgreSQL**: Relational database system used for data storage.
  
## Current Status

The template is under **active development**, and more features and updates will be added in future releases. Stay tuned for new improvements.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js v16.x or later
- PostgreSQL
- TypeORM CLI

### Installation

1. Clone the repository:
```bash
   git clone <repository-url>
   cd <repository-directory>
```
<br />

2. Install dependencies:
```bash
  npm install
```
<br />

3. Set up the database:
<br />

Make sure PostgreSQL is installed and running, then configure the connection details in your .env file.

<br />

4. Run the application:
```bash
npm run start:dev
```

### Database Migrations
This template includes migration setup using TypeORM. To run migrations:
```.bash
npm run typeorm migration:run
```
### Future Updates
As the template is still in development, future updates will include additional features, improved scalability strategies, and more comprehensive documentation.

