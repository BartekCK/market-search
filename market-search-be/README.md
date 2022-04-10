# Market-search-be

## Requirements
- Node.js 16.14.2
- Npm 8.6.0
- Docker-compose 1.29.2 
## How to run

### Local development
1. Copy `.env.template` content, create new file `.env` and paste all data inside new file.
2. Install deps `npm i`.
3. If you have docker-compose run `docker-compose up database` if not, 
you have to install postgres database on your machine.
4. Run all migrations `npm run migration:run`.
5. Start watch dev mode `npm run start:dev`.

### Docker-compose local development
1. Copy `.env.template` content, create new file `.env` and paste all data inside new file.
2. Run command `docker-compose up`

## Migrations

Create empty migration
```bash
npm run migration:create src/database/migrations/${migrationName}
```
Generate migration
```bash
npm run migration:generate src/database/migrations/${migrationName}
```
Run migrations
```bash
npm run migration:run
```
Revert last migration
```bash
npm run migration:revert
```
