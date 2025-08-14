> [!NOTE]
> Это тестовое задание для Evercode lab

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Usage
Доступно два роута:

- `POST /generate` - генерирует случайное число от 1 до 1000, сохраняет и возвращает случаеное число и его id
- `GET /retrieve/:id` - возвращает случайное число по id
