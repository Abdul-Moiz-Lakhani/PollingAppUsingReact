import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreatePoll extends Component {
    render() {
        return (
            <div className="pollFormContainer">
                <Form>
                    <FormGroup row>
                        <Label for="pollname" sm={3}>Poll Name</Label>
                        <Col sm={9}>
                            <Input type="text" name="pollname" placeholder="Write Here" title="Give unique name to your Poll" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="pollquestion" sm={2}>Question</Label>
                        <Col sm={10}>
                            <Input type="text" name="pollquestion" placeholder="Ask Here" title="What your Poll is about?" required />
                        </Col>
                    </FormGroup>
                    <h6>Provide Options:</h6>
                    <FormGroup row>
                        <Label for="pollOptionA" sm={1}>A</Label>
                        <Col sm={5}>
                            <Input type="text" name="pollOptionA" placeholder="Write Here" title="Option A" required />
                        </Col>
                        <Label for="pollOptionB" sm={1}>B</Label>
                        <Col sm={5}>
                            <Input type="text" name="pollOptionB" placeholder="Write Here" title="Option B" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="pollOptionC" sm={1}>C</Label>
                        <Col sm={5}>
                            <Input type="text" name="pollOptionC" placeholder="Write Here" title="Option C" required />
                        </Col>
                        <Label for="pollOptionD" sm={1}>D</Label>
                        <Col sm={5}>
                            <Input type="text" name="pollOptionD" placeholder="Write Here" title="Option D" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="polldeletekey" sm={3}>Deletion Key</Label>
                        <Col sm={9}>
                            <Input type="password" name="polldeletekey" placeholder="Insert Here" title="This key will be required when you want to delete this Poll" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button title="Click to Publish Poll" style={{float: 'right', cursor: 'pointer', backgroundColor: 'tomato', border: 'none'}}>Publish Poll</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default CreatePoll;