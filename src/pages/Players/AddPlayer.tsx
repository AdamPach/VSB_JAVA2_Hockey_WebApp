import {Form} from "react-bootstrap";
import {PlayerControllerApi, UpdatePlayer} from "../../api";
import React from "react";
import {useNavigate} from "react-router-dom";

const AddPlayer: React.FC = () => {
    const navigate = useNavigate();
    const [newPlayer, setNewPlayer] = React.useState<UpdatePlayer>({});

    const addPlayer = async () => {
        const api = new PlayerControllerApi();

        if(newPlayer.firstName === undefined || newPlayer.lastName === undefined || newPlayer.email === undefined) {
            alert("Please fill all the fields");
            return;
        }

        newPlayer.birthDate = new Date();

        try {
            await api.createPlayer({updatePlayer: newPlayer});
        } catch (error) {
            console.log(error);
        }
        finally {
           navigate("/players");
        }
    }

    return (
        <div className={"d-flex justify-content-center align-items-center"}>
            <Form>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>Team name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        value={newPlayer.firstName}
                        required={true}
                        onChange={event => {
                            setNewPlayer({...newPlayer, firstName: event.target.value});
                        }}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Team name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        value={newPlayer.lastName}
                        required={true}
                        onChange={event => {
                            setNewPlayer({...newPlayer, lastName: event.target.value});
                        }}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Team name</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={newPlayer.email}
                        required={true}
                        onChange={event => {
                            setNewPlayer({...newPlayer, email: event.target.value});
                        }}  />
                </Form.Group>

                <button className={"btn-primary btn"} type={"button"} onClick={ async () => await addPlayer()}>Add player</button>
            </Form>
        </div>
    )
}

export default AddPlayer;