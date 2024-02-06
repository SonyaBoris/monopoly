import { useDispatch, useSelector } from "react-redux";
import { getBalance1000, addBalance1000, getBalance10000, addBalance10000, addBalance400000, getBalance400000 } from "../redux/playerSlice";
import { random } from "../redux/appSlice.js"

import { nextUser } from "../redux/playerSlice";


const Cubik = () => {

  const count = useSelector((state) => state.counter.value)
  const us = useSelector((state) => state.player.users)
  const dispatch = useDispatch()

  const actionCubik = () => {
    dispatch(random())

    switch (count) {
      case 1: dispatch(addBalance1000())
        break;
      case 2: dispatch(getBalance1000())
        break;
      case 3: dispatch(addBalance10000())
        break;
      case 4: dispatch(getBalance10000())
        break;
      case 5: dispatch(addBalance400000())
        break;
      case 6: dispatch(getBalance400000())
        break;
    }
    dispatch(nextUser())
  }


  const activePlayer = us.filter(function (val) {
    return val.active == true;
  })[0].name;


  return (
    <div className="cubik">
      <h2>Ход игрока: {activePlayer}</h2>
      <button onClick={() => actionCubik()} className="cubik__btn">Кинуть кубик</button>
      <h3 className="cubik__result">{count}</h3>

    </div>
  );
}

export default Cubik;