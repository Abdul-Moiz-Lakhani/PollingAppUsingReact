import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreatePoll extends Component {
    render() {
        return (
            <div className="pollFormContainer">
                <Form>
                    <FormGroup row>
                        <Label for="pollname" sm={2}>Poll Name</Label>
                        <Col sm={10}>
                            <Input type="text" name="pollname" placeholder="Write Here" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="pollquestion" sm={2}>Question</Label>
                        <Col sm={10}>
                            <Input type="text" name="pollquestion" placeholder="Ask Here" required />
                        </Col>
                    </FormGroup>
                    <h6>Provide Options:</h6>
                    <FormGroup row>
                        <Label for="pollOptionA" sm={2}>A</Label>
                        <Col sm={4}>
                            <Input type="text" name="pollOptionA" placeholder="Write Here" required />
                        </Col>
                        <Label for="pollOptionB" sm={2}>B</Label>
                        <Col sm={4}>
                            <Input type="text" name="pollOptionB" placeholder="Write Here" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="pollOptionC" sm={2}>C</Label>
                        <Col sm={4}>
                            <Input type="text" name="pollOptionC" placeholder="Write Here" required />
                        </Col>
                        <Label for="pollOptionD" sm={2}>D</Label>
                        <Col sm={4}>
                            <Input type="text" name="pollOptionD" placeholder="Write Here" required />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button style={{float: 'right', cursor: 'pointer', backgroundColor: 'tomato', border: 'none'}}>Publish Poll</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default CreatePoll;