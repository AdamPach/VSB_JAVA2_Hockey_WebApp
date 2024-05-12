import React, {useEffect, useState} from "react";
import {Team, TeamControllerApi} from "../../api";
import TeamCard from "../../components/TeamCard/TeamCard.tsx";

const AllTeams: React.FC = () => {

    const [teams,setTeams] = useState<Team[]>([]);

    useEffect(() => {
        const teamsApi = new TeamControllerApi();

        teamsApi.getAllTeams()
            .then((response) => {
            setTeams(response);
        })
            .catch((error) => console.log(error));

    }, []);

    return (
        <div>
            <h2 className={"border-bottom border-1"}>All teams</h2>

            {teams.map((team) => <TeamCard key={team.id} team={team}/>)}

        </div>
    );
}

export default AllTeams;