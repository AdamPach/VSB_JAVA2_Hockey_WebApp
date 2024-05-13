import {Player} from "../../api";
import {Card, CardBody, CardHeader, CardTitle} from "react-bootstrap";
import {Link} from "react-router-dom";

type PlayerCardProps = {
    player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{player.firstName} {player.lastName}</CardTitle>
                </CardHeader>
                <CardBody>
                    <Link className={"btn btn-success"} to={"#"}>Check the player</Link>
                </CardBody>
            </Card>
        </div>
    );
}

export default PlayerCard;