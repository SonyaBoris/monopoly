import { useSelector } from "react-redux";


const Transaction = () => {
  const tr = useSelector((state) => state.player.users)

  const activePlayer = tr.filter(function (val) {
    return val.active == true;
  })[0];


  console.log(tr)

  return (
    <div className="transaction">
      <div>{activePlayer.name}</div>
      <div>{activePlayer.balance > 0 ? activePlayer.transaction : 'спит'}</div>
    </div>
  );
}

export default Transaction;