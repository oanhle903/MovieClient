import {Form, Button} from 'react-bootstrap';

const ReviewForm = ({handelSubmit, labelText, revText, defaultValue}) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>{labelText}</Form.Label>
        <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue}  />
      </Form.Group>
      <Button variant="outline-info" onClick={handelSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm