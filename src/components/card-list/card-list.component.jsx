import CardContainer from "../card-container/card-container.component";

import"./card-list.styles.css";

const CardList = ({monsters}) => (
  <div className="card-list">
    {
      monsters.map((monster) =>{
        return(
          <CardContainer key={monster.id} monster={monster}/>
        )
      })
    }
  </div>
)

export default CardList;