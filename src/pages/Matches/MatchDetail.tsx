import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {MatchControllerApi, MatchDetail as Match} from "../../api";

const MatchDetail: React.FC = () => {

    const {matchId} = useParams();

    const [match, setMatch] = useState<Match>();

    const navigate = useNavigate();

    useEffect(() => {
        const api = new MatchControllerApi();

        if(!matchId) return;

        api.getMatch({matchId: parseInt(matchId)})
            .then((response) => {
                setMatch(response);
            })
            .catch((error) => console.log(error));
    }, [matchId]);

    const deleteMatch = async () => {
        const api = new MatchControllerApi();

        if(!match) return;

        try {
            await api.deleteMatch({matchId: match.id!});
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/matches");
        }
    }

    return (
        <div>
            {match && (
                <div>
                    <h2 className={"border-bottom border-1"}>{match.homeTeamName} ({match.homeScore}) : ({match.awayScore}) {match.awayTeamName}</h2>
                    <h4 className={"my-3"}>Date</h4>
                    <p>{match.matchDate?.toDateString()}</p>
                    <Link className={"btn btn-success mx-2"} to={`/teams/${match.homeTeamId}`}>Check home team</Link>
                    <Link className={"btn btn-warning mx-2"} to={`/teams/${match.awayTeamId}`}>Check away team</Link>

                    <button className={"btn btn-danger"} onClick={async () => deleteMatch()}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default MatchDetail;