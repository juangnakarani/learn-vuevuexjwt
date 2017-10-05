# vuevuexjwt

> implementasi vuex dan jwt dengan axios http-client

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Skenario
App.vue memiliki 4 button di navigation-bar: `Home` | `Guest` | `Admin` | `Login`. Untuk membuka halaman admin (`/admin`) user harus login terlebih dahulu. Tanpa login halaman admin akan `return http 401`. Pada proses login `axios` akan melakukan request `post` ke jwt server dengan body `application/json` dan jika `true` akan mendapat bearer token dan jika `false` akan mendapat return `403` dari server.

Vuex akan menyimpan token pada store selama aplikasi berjalan. selain token ada juga state `auth`(`bool`) dan `islogin`(`bool`) untuk handle login/out user. Ketika user login dan true makan token akan disimpan dan nilai auth = `true` dan login = `true` dan sebaliknya ketika user logout.

## Cara install axios http-client
`$ npm install axios`

Instansiasi axios dilukan di file`index.js` berikut:

```javascript
export const HTTP = axios.create({
  baseURL: `http://192.168.1.12:8090`,
  withCredentials: false,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})
```
