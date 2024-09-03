import burger from '../../icons/burger.svg';

export default function BurgerBtn({ setOpenedModal }) {
  return (
    <img
      src={burger}
      onClick={() => {
        setOpenedModal(true);
      }}
    ></img>
  );
}
