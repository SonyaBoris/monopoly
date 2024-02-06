import Player from "./Player";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/playerSlice";

const Players = () => {
  const us = useSelector((state) => state.player.users)
  const dispatch = useDispatch()


  const users = us.map(obj => 
  <Player key={obj.id} 
  name={obj.name} balance={obj.balance} active={obj.active} />)

  return (
    <div className="players">
      {users}
      <button 
      disabled={us.length === 4}
      className="players__btn" 
      onClick={() => dispatch(addUser())}>Добавить игрока</button>
    </div>
  );
}

export default Players;