import { DISABLED_PURCHASE_BUTTON_TEXT, LOTTO_IMAGE, CLASSNAME } from '../constants/constants';
import { createElementWithClassName, initInputElement, selectDom } from '../utils/utils';

import LottoGenerator from '../model/lottoGenerator';

class LottoMachineView {
  constructor() {
    this.lottoGenerator = new LottoGenerator();
    this.#initDom();
  }

  #initDom() {
    this.cashInput = selectDom('.cash-input');
    this.cashInputButton = selectDom('.cash-input-button');
    this.cashInputButton.addEventListener('click', this.#onCashInputButtonClick);

    this.purchasedLottoSection = selectDom('.purchased-lotto-section');
    this.lottoShowContainer = selectDom('.lotto-container', this.purchasedLottoSection);
    this.lottoNumberContainer = selectDom('.lotto-grid', this.purchasedLottoSection);
    this.showNumberToggleButton = selectDom(
      '.show-number-toggle-button',
      this.purchasedLottoSection
    );

    this.winnerNumberSection = selectDom('.winner-number-section');
  }

  #onCashInputButtonClick = (e) => {
    e.preventDefault();
    try {
      this.lottoGenerator.buyLotto(this.cashInput.value);
      this.#disableCashInputSection();
      this.#renderLottos(this.lottoGenerator.lottos);
      this.showNumberToggleButton.addEventListener('click', this.#onShowNumberToggleButtonClick);
    } catch (error) {
      initInputElement(this.cashInput);
      alert(error.message);
    }
  };

  #onShowNumberToggleButtonClick = ({ target: { checked: isVisible } }) => {
    this.#toggleLottoNumbersShow(isVisible);
  };

  #toggleLottoNumbersShow(isVisible) {
    const { classList: lottoNumberContainerClassList } = this.lottoNumberContainer;
    if (isVisible) {
      lottoNumberContainerClassList.remove(CLASSNAME.HIDE_NUMBERS);
      return;
    }
    lottoNumberContainerClassList.add(CLASSNAME.HIDE_NUMBERS);
  }

  #disableCashInputSection() {
    this.cashInput.disabled = true;
    this.cashInputButton.disabled = true;
    this.cashInputButton.textContent = DISABLED_PURCHASE_BUTTON_TEXT;
  }

  #renderLottos(lottos) {
    this.purchasedLottoSection.classList.remove(CLASSNAME.HIDE);
    this.winnerNumberSection.classList.remove(CLASSNAME.HIDE);

    this.lottoShowContainer.prepend(this.#generatePurchasedLabel(lottos.length));
    this.lottoNumberContainer.append(...this.#generateLottoElementsArray(lottos));
  }

  #generatePurchasedLabel(length) {
    const labelElement = document.createElement('label');
    labelElement.textContent = `총 ${length}개를 구매하였습니다.`;
    return labelElement;
  }

  #generateLottoElementsArray(lottos) {
    return lottos.map((lotto) => this.#generateLottoElement(lotto));
  }

  #generateLottoElement(lotto) {
    const lottoElement = createElementWithClassName('div', CLASSNAME.LOTTO);

    const lottoImage = createElementWithClassName('p', CLASSNAME.LOTTO_IMAGE);
    lottoImage.textContent = LOTTO_IMAGE;

    const lottoNumbers = createElementWithClassName('p', CLASSNAME.LOTTO_NUMBERS);
    lottoNumbers.textContent = Array.from(lotto.lottoNumberSet).join(', ');

    lottoElement.append(lottoImage, lottoNumbers);
    return lottoElement;
  }
}

export default LottoMachineView;
