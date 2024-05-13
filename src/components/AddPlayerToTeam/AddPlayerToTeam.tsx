import React, {useEffect, useState} from "react";
import {Team, TeamControllerApi} from "../../api";
import {Form} from "react-bootstrap";

type AddPlayerToTeamProps = {
  playerId: number;
  refreshPlayer: () => void;
};

const AddPlayerToTeam: React.FC<AddPlayerToTeamProps> = ({playerId, refreshPlayer}) => {

    const [teams, setTeams] = useState<Team[]>([]);

    const [selectedTeamId, setSelectedTeamId] = useState<Team>();

    useEffect(() => {
        const api = new TeamControllerApi();

        api.getAllTeams()
            .then((response) => {
                setTeams(response);
            })
            .catch((error) => console.log(error));

    }, []);

    const addPlayerToTeam = async (teamId: number | undefined, playerId: number) => {
        const api = new TeamControllerApi();

        if(teamId === undefined) {
            alert("Please select a team");
            return;
        }

        try {
            await api.addPlayerToTeam({teamId: teamId, playerId: playerId});
        } catch (error) {
            console.log(error);
        }
        finally {
            refreshPlayer();
        }
    }

    return (
        <div>
            <h4 className={"my-3"}>Add Player To Team</h4>
            <Form.Select  onChange={ e => {
                setSelectedTeamId(teams[e.target.selectedIndex - 1]);
            }}>
                <option>Select player team</option>
                { teams.map((team) => <option key={team.id}>{team.name}</option>) }
            </Form.Select>
            <button className={"btn-primary btn my-3"} onClick={async () => addPlayerToTeam(selectedTeamId?.id, playerId)}>Add to the team</button>
        </div>
    );
}

export default AddPlayerToTeam;