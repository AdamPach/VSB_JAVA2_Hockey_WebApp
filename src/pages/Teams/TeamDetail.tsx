import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {MatchDetail, Player, Team, TeamControllerApi} from "../../api";
import PlayerCard from "../../components/PlayerCard/PlayerCard.tsx";
import MatchCard from "../../components/MatchCard/MatchCard.tsx";

const TeamDetail: React.FC = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState<Team>();
    const [players, setPlayers] = useState<Player[]>([]);
    const [matches, setMatches] = useState<MatchDetail[]>([]);

    useEffect(() => {
        const api = new TeamControllerApi();

        if(!teamId) return;

        api.getTeamById({teamId: parseInt(teamId)})
            .then((response) => {
                setTeam(response);
            })
            .catch((error) => console.log(error));

        api.getTeamPlayers({teamId: parseInt(teamId)})
            .then((response) => {
                setPlayers(response);
            })
            .catch((error) => console.log(error));

        api.getTeamMatches({teamId: parseInt(teamId)})
            .then((response) => setMatches(response))
            .catch((error) => console.log(error));

    }, [teamId]);

    return (
        <div>
            {team && (
                <div>
                    <h2 className={"border-1 border-bottom my-3"}>{team.name}</h2>
                    <h4 className={"my-3"}>Description</h4>
                    <p>{team.description}</p>
                    <h4 className={"my-3"}>City</h4>
                    <p>{team.city}</p>
                    <h4 className={"my-3"}>Established</h4>
                    <p>{team.establishmentDate?.toDateString()}</p>
                </div>
            )}

            {players.length > 0 && <h2 className={"border-1 border-bottom my-3"}>Players</h2>}

            {players.map((player) => <PlayerCard player={player} key={player.id}/>)}

            {matches.length > 0 && <h2 className={"border-1 border-bottom my-3"}>Matches</h2>}

            {matches.map((match) => <MatchCard match={match} key={match.id}/>)}

        </div>
    );
}

export default TeamDetail;