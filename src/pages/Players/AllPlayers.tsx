import React, {useEffect} from "react";
import {Player, PlayerControllerApi} from "../../api";
import PlayerCard from "../../components/PlayerCard/PlayerCard.tsx";

const AllPlayers: React.FC = () => {

    const [players, setPlayers] = React.useState<Player[]>([]);

    useEffect(() => {
        const api = new PlayerControllerApi();

        api.getPlayers()
            .then((response) => {
                setPlayers(response);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
      <div>
          <h2 className={"border-bottom border-1"}>All Players</h2>

          { players.map((player) => <PlayerCard player={player} key={player.id} />) }
      </div>
    );
};

export default AllPlayers;