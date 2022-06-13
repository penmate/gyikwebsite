<p align="center">
  <a target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

    
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Project description

Készíts  egy  GYIK  (gyakran ismételt  kérdések, FAQ)  weboldalt kiszolgáló  Restful  API-t -mint  amilyen például  a gyakorikerdesek.hu vagy  a stackoverflow.com. Az  alkalmazással  kategóriákba  rendezett kérdéseket lehet feltenni, amiket más felhasználók megválaszolhatnak, illetve a válaszokra reagálhatnak pozitív vagy negatív reakcióval.

**A  megvalósításhoz TypeScript nyelvet és NestJS keretrendszert  használj.  Az  elkészült  projektet  a GitHub-ra töltsd fel és a repository linkjét küldd el számunkra.**
  
Tasks:
  
Az API az alábbi funkcionalitással rendelkezzen:
  - Az APIútvonalakJSONformában kommunikáljanaka felhasználóval.
  - Az  alkalmazás  tároljon  felhasználókat  (a  felhasználók bejelentkeztetése vagy jogosultságuk ellenőrzése opcionális).
  - A    kérdéseket kategóriákba lehessen rendezni (ehhez kapcsolótábla szükséges)ésfelhasználóhoz kötve tároljuk őket.
  - A  kérdésekhez a felhasználók válaszokat adhatnak hozzá, aválaszokra  más felhasználók pozitív/negatív módon reagálhatnak, ezeknek a számát a válasznál tárolni kell.
  
Optional:
  
- JWT bejelentkezés és a kérések előtt a token ellenőrzése(ehhez a felhasználóhoz jelszót is szükséges tárolni valamilyen módon)
- OpenAPI(Swagger) dokumentáció generálása
- Unit és/vagy funkcionális tesztek írása
  
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
  
  
## Other
  
**Api desing platform:** Insomnia
  
**Database:** postgreSQL - Install & run docker desktop first.
```bash
# starting docker image
$ docker compose up dev-db -d
  
# checking docker image
$ docker ps
```
  
**ORM: prisma**
```bash
# starting prisma
$ npx prisma studio
  
# running migration if needed
$ npx prisma migrate dev  
```
  
 
## License

Nest is [MIT licensed](LICENSE).

