# Czech Bank Account Validator

A small and handy library to validate CZ bank account numbers. Running in a browser, in Node.js and also as ES6 module.

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

```html
<script type="text/javascript" src="cz-bank-account-validator.min.js"></script>
<script type="text/javascript">
    const bankValidator = window['cz-bank-account-validator'];
    const isValid = bankValidator.validate('2502056361/2010');
    alert(isValid);
</script>
```

In Node.js (with require):

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
const bankValidator = require('cz-bank-account-validator/lib/cz-bank-account-validator');
```

### Valid bank account numbers
```js

bankValidator.validate('2502056361/2010') // true
bankValidator.validate('19-2502056361/0800') // true

```

### Invalid bank account numbers

Unknown bank code (see all [src/bankCodes.js](supported CZ bank codes)):
 
```js
bankValidator.validate('19-2502056361/9999') // false
```

Account prefix allowed length exceeded:
 
```js
bankValidator.validate('1999999-2502056361/0800') // false
```

Account number mod 11 rule not fulfilled:

```js
bankValidator.validate('19-9144118100/0800') // false
```

### Get all CZ bank codes
```js
bankValidator.getAllBankCodes() // '{"2010":{"bankName":"Fio banka, a.s."},"2020":{"bankName":"MUFG Bank (Europe) N.V. Prague Branch"},"2030":{"bankName":"AKCENTA, spořitelní a úvěrní družstvo"}, ... "0710":{"bankName":"Česká národní banka"},"0800":{"bankName":"Česká spořitelna, a.s."}}'
```

### Get bank account fragments
```js
bankValidator.getAccountPrefix('2502056361/2010') // null - prefix is empty
bankValidator.getAccountPrefix('19-2502056361/0800') // 19
bankValidator.getAccountPrefix('19-2502056361/9999') // null - bank code is invalid => account number is invalid
bankValidator.getAccountPrefix('19-9144118100/0800') // null - account number mod 11 rule not fulfilled => account number is invalid

bankValidator.getAccountNumber('2502056361/2010') // 2502056361
bankValidator.getAccountNumber('19-2502056361/0800') // 2502056361
bankValidator.getAccountNumber('19-2502056361/9999') // null - bank code is invalid => account number is invalid
bankValidator.getAccountNumber('19-9144118100/0800') // null - account number mod 11 rule not fulfilled => account number is invalid

bankValidator.getBankCode('2502056361/2010') // 2010
bankValidator.getBankCode('19-2502056361/0800') // 0800
bankValidator.getBankCode('19-2502056361/9999') // null - bank code is invalid => account number is invalid
bankValidator.getBankCode('19-9144118100/0800') // null - account number mod 11 rule not fulfilled => account number is invalid
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) for more details.

