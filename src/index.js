import { bankCodes } from "./bankCodes";
import { getBankAccountGroups, mod11 } from "./util";

export default {

  getAccountPrefix(bankAccount) {
    const bankAccountMatchedGroups = getBankAccountGroups(bankAccount);
    return bankAccountMatchedGroups?.prefixCode ?? null;
  },

  getAccountNumber(bankAccount) {
    const bankAccountMatchedGroups = getBankAccountGroups(bankAccount);
    return bankAccountMatchedGroups?.accountNumber ?? null;
  },

  getBankCode(bankAccount) {
    const bankAccountMatchedGroups = getBankAccountGroups(bankAccount);
    return bankAccountMatchedGroups?.bankCode ?? null;
  },

  getAllBankCodes() {
    return bankCodes;
  },

  /**
   * http://www.zlatakoruna.info/zpravy/ucty/cislo-uctu-v-cr
   * @param bankAccount
   */
  validate(bankAccount = '') {
    if (typeof bankAccount !== 'string' || bankAccount.length < 1) {
      return false;
    }

    const bankCodeKeys = Object.keys(this.getAllBankCodes());
    const bankAccountMatchedGroups = getBankAccountGroups(bankAccount);

    if (bankAccountMatchedGroups) {
      const { prefixCode, accountNumber, bankCode } = bankAccountMatchedGroups;

      const prefixCodeValid = prefixCode ? mod11(prefixCode) : true; // can be empty
      const accountNumberValid = accountNumber ? mod11(accountNumber) : false;
      const bankCodeValid = bankCode ? bankCodeKeys.includes(bankCode) : false;

      return prefixCodeValid && accountNumberValid && bankCodeValid;
    }

    return false;
  },

};
