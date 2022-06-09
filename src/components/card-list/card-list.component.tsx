import { MonsterType } from "../../App";
import Card from "../card/card.componenet";

import "./card-list.styles.css";

type CardListProp = {
  monsters: MonsterType[]
}

const CardList = ({ monsters }: CardListProp) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
