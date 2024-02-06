import user from "../assets/Union.svg"

const Player = ({ name, active, balance }) => {

  return (
    <div className={active === true ? 'player select' : 'player'}>
      <img src={user} alt="" />
      <div className="player__info">
        <div className="player__info-name">{name}</div>
        <div className="player__info-balance">{balance > - 5000 ? balance : 'нет'} монет</div>
      </div>
    </div>
  );
}

export default Player;