import burger from '../../icons/burger.svg';
import closeButton from '../../icons/close-button.svg';

export default function BurgerBtn({ setOpenedModal, openedModal }) {
  return openedModal ? (
    <img
      src={closeButton}
      onClick={() => {
        setOpenedModal(false);
      }}
      alt="closeButton"
    ></img>
  ) : (
    <img
      src={burger}
      onClick={() => {
        setOpenedModal(true);
      }}
      alt="burger"
    ></img>
  );
}
