import React from "react";
import {Form} from "react-bootstrap";
import {TeamControllerApi, UpdateTeam} from "../../api";
import {useNavigate} from "react-router-dom";

const AddTeam: React.FC = () => {

    const navigate = useNavigate();

    const [newTeam, setNewTeam] = React.useState<UpdateTeam>({});

    const createTeam = async () => {
        const api = new TeamControllerApi();

        if(newTeam.name === undefined || newTeam.description === undefined || newTeam.city === undefined) {
            alert("Please fill all the fields");
            return;
        }

        newTeam.establishmentDate = new Date();

        try{
            const team = await api.createTeam({updateTeam: newTeam})
            navigate("/teams/" + team.id);
        }
        catch (error){
            alert("Team already exists");
        }
    }

    return (
        <div className={"d-flex justify-content-center align-items-center"}>
            <Form>
                <Form.Group className="mb-3" controlId="formTeamName">
                    <Form.Label>Team name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter team name"
                        value={newTeam.name}
                        required={true}
                        onChange={event => {
                            setNewTeam({...newTeam, name: event.target.value});
                        }}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTeamDescription">
                    <Form.Label>Team description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter team name"
                        value={newTeam.description}
                        required={true}
                        onChange={event => {
                            setNewTeam({...newTeam, description: event.target.value});
                        }}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTeamDescription">
                    <Form.Label>Team city</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter team name"
                        value={newTeam.city}
                        required={true}
                        onChange={event => {
                            setNewTeam({...newTeam, city: event.target.value});
                        }}  />
                </Form.Group>

                <button type={"button"} className={"btn btn-primary"} onClick={createTeam}>Create team</button>
            </Form>
        </div>
    )
}

export default AddTeam;