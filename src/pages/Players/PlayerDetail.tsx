import {Player, PlayerControllerApi, Team, TeamControllerApi} from "../../api";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import AddPlayerToTeam from "../../components/AddPlayerToTeam/AddPlayerToTeam.tsx";

const PlayerDetail: React.FC = () => {

    const {playerId} = useParams();

    const [player, setPlayer] = useState<Player>();
    const [team, setTeam] = useState<Team>();

    useEffect(() => {
        const api = new PlayerControllerApi();

        api.getPlayer({playerId: parseInt(playerId!)})
            .then((response) => {
                setPlayer(response);

                if(!response.teamId) {
                    return;
                }

                const teamApi = new TeamControllerApi();

                return teamApi.getTeamById({teamId: response.teamId!});
            }).then((response) => {
                setTeam(response);
            })
            .catch((error) => console.log(error));

    }, [playerId]);

    const leaveTeam = async (teamId: number, playerId: number) => {
        const api = new TeamControllerApi();

        try {
            await api.removePlayerFromTeam({teamId: teamId, playerId: playerId});
        } catch (error) {
            console.log(error);
        }
        finally {
            window.location.reload();
        }
    }

    return (
        <div>
            {player && (
                <div>
                    <h2 className={"border-1 border-bottom my-3"}>{player.firstName} {player.lastName}</h2>
                    <h4 className={"my-3"}>Date of birth</h4>
                    <p>{player.birthDate?.toDateString()}</p>

                    {team != undefined ? (
                        <div>
                            <h4 className={"my-3"}>Team</h4>
                            <p>{team.name}</p>

                            <button className={"btn btn-warning"} onClick={async () => leaveTeam(team.id!, player.id!)}>Leave team</button>
                        </div>
                    ) : (
                        <AddPlayerToTeam playerId={player.id!}/>
                    )}
                </div>
            )}
        </div>
    )
}

export default PlayerDetail;
