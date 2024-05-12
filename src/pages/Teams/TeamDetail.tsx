import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Team, TeamControllerApi} from "../../api";

const TeamDetail: React.FC = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState<Team>();

    useEffect(() => {
        const api = new TeamControllerApi();

        if(!teamId) return;

        api.getTeamById({teamId: parseInt(teamId)})
            .then((response) => {
                setTeam(response);
            })
            .catch((error) => console.log(error));
    }, [teamId]);

    return (
        <div>
            {team && (
                <div>
                    <h2 className={"border-1 border-bottom"}>{team.name}</h2>
                    <p>{team.description}</p>
                </div>
            )}
        </div>
    );
}

export default TeamDetail;