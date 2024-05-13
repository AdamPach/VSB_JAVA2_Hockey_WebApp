import {Player, PlayerControllerApi, Team, TeamControllerApi} from "../../api";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import AddPlayerToTeam from "../../components/AddPlayerToTeam/AddPlayerToTeam.tsx";

const PlayerDetail: React.FC = () => {

    const {playerId} = useParams();

    const [player, setPlayer] = useState<Player>();
    const [team, setTeam] = useState<Team>();

    const navigate = useNavigate();

    const refreshPlayer = () => {
        const api = new PlayerControllerApi();

        api.getPlayer({playerId: parseInt(playerId!)})
            .then((response) => {
                setPlayer(response);
            }).catch((error) => console.log(error));
    }
    
    useEffect(() => {
        refreshPlayer();
    }, [playerId]);

    useEffect(() => {
        if(!player) return;

        if(player.teamId === undefined) {
            setTeam(undefined);
            return;
        }

        const api = new TeamControllerApi()

        api.getTeamById({teamId: player.teamId!})
            .then((response) => {
                setTeam(response);
            }).catch((error) => console.log(error));
    }, [player]);

    const leaveTeam = async (teamId: number, playerId: number) => {
        const api = new TeamControllerApi();

        try {
            await api.removePlayerFromTeam({teamId: teamId, playerId: playerId});
        } catch (error) {
            console.log(error);
        }
        finally {
            setPlayer({...player, teamId: undefined});
        }
    }

    const deletePlayer = async () => {
        const api = new PlayerControllerApi();

        try {
            await api.deletePlayer({playerId: player!.id!});
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/players");
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
                        <AddPlayerToTeam
                            refreshPlayer={refreshPlayer}
                            playerId={player.id!}/>
                    )}

                    <button
                        className={"btn btn-danger my-3 d-block"}
                        onClick={async () => await deletePlayer() }>Delete Player</button>
                </div>
            )}
        </div>
    )
}

export default PlayerDetail;
