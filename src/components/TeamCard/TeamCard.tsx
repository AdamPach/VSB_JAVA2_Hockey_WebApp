import React from "react";
import {Team} from "../../api";
import {Card, CardBody, CardHeader, CardTitle} from "react-bootstrap";
import {Link} from "react-router-dom";

type TeamCardProps = {
    team: Team;
}


const TeamCard: React.FC<TeamCardProps> = ({ team }) => {

    return (
        <Card className={"my-3"}>
            <CardHeader>
                <CardTitle>{team.name}</CardTitle>
            </CardHeader>
            <CardBody>
                <Link className={"btn btn-success"} to={`${team.id}`}>Check team</Link>
            </CardBody>
        </Card>
    );
}

export default TeamCard;