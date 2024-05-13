import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {MatchControllerApi, Team, TeamControllerApi, UpdateMatch} from "../../api";
import {useNavigate} from "react-router-dom";

const AddMatch: React.FC = () => {

    const [newMatch, setNewMatch] = useState<UpdateMatch>({});

    const [teams, setTeams] = useState<Team[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const api = new TeamControllerApi();

        api.getAllTeams()
            .then((response) => {
                setTeams(response);
            })
            .catch((error) => console.log(error));
    }, []);

    const addMatch = async () => {
        const api = new MatchControllerApi();

        if(newMatch.homeTeamId === undefined || newMatch.awayTeamId === undefined) {
            alert("Please select both teams");
            return;
        }

        if(newMatch.homeTeamId === newMatch.awayTeamId) {
            alert("You selected the same team for both home and away team");
            return;
        }

        if (newMatch.homeScore === undefined || newMatch.awayScore === undefined) {
            alert("Please fill in the scores");
            return;
        }

        newMatch.matchDate = new Date();

        try {
            const match = await api.createMatch({updateMatch: newMatch});
            navigate("/matches/" + match.id);
        } catch (error) {
            alert("Match already exists");
        }
    }

    return (
        <div>
            <h2 className={"border-bottom border-1"}>Add Match</h2>
            <div className={"d-flex justify-content-center align-items-center"}>
                <Form>
                    <Form.Group className={"mb-3"} controlId={"matchHomeTeam"}>
                        <Form.Label>Select Home Team</Form.Label>

                        <Form.Select onChange={ e => setNewMatch({...newMatch, homeTeamId: teams[e.target.selectedIndex - 1].id})}>
                            <option>Select Home Team</option>
                            {teams.map((team) => <option key={team.id}>{team.name}</option>)}
                        </Form.Select>

                    </Form.Group>

                    <Form.Group className={"mb-3"} controlId={"matchHomeScore"}>
                        <Form.Label>Home score</Form.Label>

                        <Form.Control
                            value={newMatch.homeScore}
                            type={"number"}
                            onChange={ e => setNewMatch({...newMatch, homeScore: parseInt(e.target.value)})}/>
                    </Form.Group>

                    <Form.Group className={"mb-3"} controlId={"matchAwayTeam"}>
                        <Form.Label>Select Away Team</Form.Label>

                        <Form.Select onChange={ e => setNewMatch({...newMatch, awayTeamId: teams[e.target.selectedIndex - 1].id})}>
                            <option>Select Home Team</option>
                            {teams.map((team) => <option key={team.id}>{team.name}</option>)}
                        </Form.Select>

                    </Form.Group>

                    <Form.Group className={"mb-3"} controlId={"matchAwayScore"}>
                        <Form.Label>Home score</Form.Label>

                        <Form.Control
                            value={newMatch.awayScore}
                            type={"number"}
                            onChange={ e => setNewMatch({...newMatch, awayScore: parseInt(e.target.value)})}/>
                    </Form.Group>

                    <button
                        type={"button"}
                        className={"btn btn-primary"}
                        onClick={async () => await addMatch()}>
                        Add match
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default AddMatch;