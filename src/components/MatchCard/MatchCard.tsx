import {MatchDetail} from "../../api";
import {Card, CardBody, CardHeader, CardTitle} from "react-bootstrap";
import {Link} from "react-router-dom";

type MatchCardProps = {
    match: MatchDetail;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {

    return (
        <div className={"my-3"}>
            <Card>
                <CardHeader>
                    <CardTitle>{match.homeTeamName} ({match.homeScore}) : ({match.awayScore}) {match.awayTeamName}</CardTitle>
                </CardHeader>
                <CardBody>
                    <Link className={"btn btn-primary mx-2"} to={`/matches/${match.id}`}>Check whole match</Link>
                    <Link className={"btn btn-success mx-2"} to={`/teams/${match.homeTeamId}`}>Check home team</Link>
                    <Link className={"btn btn-danger mx-2"} to={`/teams/${match.awayTeamId}`}>Check away team</Link>
                </CardBody>
            </Card>
        </div>
    );
}

export default MatchCard;