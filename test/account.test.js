/*

const bankAccountValidatorLib = require('../lib/cz-bank-account-validator');

const { validate, getAccountNumber, getAccountPrefix, getBankCode } = bankAccountValidatorLib;

describe('test CZ bank account numbers validation', () => {
    test('should be valid bank account number', () => {
        const accountNumberPart = '2502056361';
        const bankCodePart = '2010';
        const account = `${accountNumberPart}/${bankCodePart}`;

        expect(validate(account)).toBeTruthy();
        expect(getAccountNumber(account)).toEqual(accountNumberPart);
        expect(getBankCode(account)).toEqual(bankCodePart);
    });

    test('should be valid bank account number with prefix', () => {
        const accountPrefixPart = '19';
        const accountNumberPart = '2502056361';
        const bankCodePart = '0800';
        const account = `${accountPrefixPart}-${accountNumberPart}/${bankCodePart}`

        expect(validate(account)).toBeTruthy();
        expect(getAccountPrefix(account)).toEqual(accountPrefixPart);
        expect(getAccountNumber(account)).toEqual(accountNumberPart);
        expect(getBankCode(account)).toEqual(bankCodePart);
    });

    test('should be invalid bank account number - prefix exceeded', () => {
        const account = '1999999-2502056361/0800';
        expect(validate(account)).toBeFalsy();
        expect(getAccountPrefix(account)).toBeNull();
        expect(getAccountNumber(account)).toBeNull();
        expect(getBankCode(account)).toBeNull();
    });

    test('should be invalid bank account number - invalid account', () => {
        const account = '19-1111111111/0800';
        expect(validate(account)).toBeFalsy();
        expect(getAccountPrefix(account)).toBeNull();
        expect(getAccountNumber(account)).toBeNull();
        expect(getBankCode(account)).toBeNull();
    });

    test('should be invalid bank account number - unknown bank code', () => {
        const account = '19-2502056361/9999';
        expect(validate(account)).toBeFalsy();
        expect(getAccountPrefix(account)).toBeNull();
        expect(getAccountNumber(account)).toBeNull();
        expect(getBankCode(account)).toBeNull();
    });
});
*/
