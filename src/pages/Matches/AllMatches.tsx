import React, {useEffect} from "react";
import {MatchControllerApi, MatchDetail} from "../../api";
import MatchCard from "../../components/MatchCard/MatchCard.tsx";

const AllMatches: React.FC = () => {

    const [matches, setMatches] = React.useState<MatchDetail[]>([]);

    useEffect(() => {
        const api = new MatchControllerApi();

        api.getMatches()
            .then((response) => {
                setMatches(response);
            })
            .catch((error) => console.log(error));

        }, []);

    return (
        <div>
            <h2 className={"border-bottom border-1"}>All Matches</h2>

            {matches.map( match => <MatchCard match={match} key={match.id} />) }
        </div>
    )
}

export default AllMatches;