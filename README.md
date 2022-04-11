# Czech Bank Account Validator

A small and handy library to validate CZ bank account numbers. Running in a browser, in Node.js and also as an ES6 module.

## Getting Started

With npm:

```shell
$ npm i --save cz-bank-account-validator
```

With yarn:

```shell
$ yarn add cz-bank-account-validator
```

### Installation

In a browser:
_(See example/index.html for code example)_

```html
<script type="text/javascript" src="cz-bank-account-validator.min.js"></script>
<script type="text/javascript">
    const czBankAccountValidator = window['cz-bank-account-validator'];
    const isValid = czBankAccountValidator.validate('2502056361/2010');
    alert(isValid);
</script>
```

In Node.js (require):

```js
const bankValidator = require('cz-bank-account-validator/lib/cz-bank-account-validator');

bankValidator.validate('2502056361/2010');
// => true
```

ES6 Modules:

```js
import bankValidator from 'cz-bank-account-validator/lib/cz-bank-account-validator';

bankValidator.validate('2502056361/2010');
// => true
```

## Usage

```js
const bankAccountValidator = require('cz-bank-account-validator/lib/cz-bank-account-validator');

bankAccountValidator.validate('2502056361/2010') // true
bankAccountValidator.validate('19-2502056361/0800') // false - unknown bank code
bankAccountValidator.validate('19-2502056361/9999') // false - unknown bank code

bankAccountValidator.getAllBankCodes() // '{"2010":{"bankName":"Fio banka, a.s."},"2020":{"bankName":"MUFG Bank (Europe) N.V. Prague Branch"},"2030":{"bankName":"AKCENTA, spořitelní a úvěrní družstvo"}, ... "0710":{"bankName":"Česká národní banka"},"0800":{"bankName":"Česká spořitelna, a.s."}}'

bankAccountValidator.getAccountPrefix('2502056361/2010') // null
bankAccountValidator.getAccountPrefix('19-2502056361/0800') // 19
bankAccountValidator.getAccountPrefix('19-2502056361/9999') // null

bankAccountValidator.getAccountNumber('2502056361/2010') // 2502056361
bankAccountValidator.getAccountNumber('19-2502056361/0800') // 2502056361
bankAccountValidator.getAccountNumber('19-2502056361/9999') // null

bankAccountValidator.getBankCode('2502056361/2010') // 2010
bankAccountValidator.getBankCode('19-2502056361/0800') // 0800
bankAccountValidator.getBankCode('19-2502056361/9999') // null

```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) for more details.

