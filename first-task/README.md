> [!NOTE]
> Это тестовое задание 1 для Evercode lab

## Task
Нужно написать Rest API с двумя методами:
generate() - отдаёт случайное число от 1 до 1000. Каждой генерации присваивается уникальный id и хранится в произвольном месте (проще - лучше)
retrieve(id) - получение результата генерации по id

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
