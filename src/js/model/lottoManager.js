import { CASH_INPUT_RANGE, ERROR_MESSAGE, LOTTO_PRICE } from '../constants/constants';
import { isNumberInRange } from '../utils/utils';
import Lotto from './lotto';

class LottoManager {
  constructor() {
    this.lottos = [];
    this.lottoPrice = LOTTO_PRICE;
  }

  buyLotto(cashInput) {
    this.#validateCashInput(Number(cashInput));
    this.#generateLottos(this.#getLottoPurchaseAmount(Number(cashInput)));
  }

  #validateCashInput(cashInput) {
    if (!cashInput) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT_MESSAGE);
    }
    if (
      !isNumberInRange({ number: cashInput, min: CASH_INPUT_RANGE.MIN, max: CASH_INPUT_RANGE.MAX })
    ) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_MESSAGE);
    }
    if (!this.#isNoChangeLeft(cashInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_UNIT_MESSAGE);
    }
  }

  #getLottoPurchaseAmount(cashInput) {
    return cashInput / this.lottoPrice;
  }

  #generateLottos(purchaseAmount) {
    this.lottos = Array.from({ length: purchaseAmount }, () => new Lotto());
  }

  #isNoChangeLeft(insertCash) {
    return insertCash % this.lottoPrice === 0;
  }
}

export default LottoManager;
