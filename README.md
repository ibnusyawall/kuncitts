## Kuncitts.com scrapper

> mencari jawaban dari teka teki silang populer


```sh
npm i @ibnusyawall/kuncitts
```

CJS
```js
const Kuis = require('@ibnusyawall/kuncitts');

const question = 'Jika kotor tidak dapat dicuci jika robek tidak dapat dijahit';
Kuis(question)
  .then(result => {
      console.log(result)
  })
  .catch(e => {
      console.log(e)
  })
```

ES6
```js
import Kuis from '@ibnusyawall/kuncitts';

const question = 'Jika kotor tidak dapat dicuci jika robek tidak dapat dijahit';

try {
    var result = await Kuis(question);
    console.log(result)
} catch(e) {
    console.log(e)
}
```

