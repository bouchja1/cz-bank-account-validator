const bankAccountCZRegex = /^(([0-9]{0,6})-)?([0-9]{1,10})\/(\d{4})$/i;

// checks the mod11 criterion
export const mod11 = (number) => {
    const scale = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];
    const reversed = number.split('').reverse();

    const sum = reversed
        .map((stringPart) => {
            return parseInt(stringPart);
        })
        .map((numberPart, i) => {
            return scale[i] * numberPart;
        })
        .reduce((x, y) => {
            return x + y;
        });
    return sum % 11 === 0;
};

export const getBankAccountGroups = (bankAccount = '') => {
    if (typeof bankAccount !== 'string' || bankAccount.length < 1) {
        return false;
    }

    const bankAccountString = bankAccount.replaceAll(' ', '');
    const matchedGroup = bankAccountString.match(bankAccountCZRegex);

    if (matchedGroup && matchedGroup.length) {
        const prefixCode = matchedGroup[2];
        const accountNumber = matchedGroup[3];
        const bankCode = matchedGroup[4];
        return {
            prefixCode,
            accountNumber,
            bankCode,
        };
    }
    return null;
};
