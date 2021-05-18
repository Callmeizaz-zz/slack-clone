import { React, useState } from "react";
import { Container, Header, Input, Button } from "semantic-ui-react";
import { gql, useMutation } from "@apollo/client";

// Mutation
const ADD_USER = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password)
  }
`;

function RegisterComp() {
  const [addUser, { data }] = useMutation(ADD_USER);
  const [form, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...form, [name]: value });
    // setUsername({[username]:value})
  };

  const submitHandler = async () => {
    await addUser({ variables: form });
    console.log(data);
  };

  return (
    <Container>
      <Header>Register</Header>
      <Input
        name="username"
        fluid
        placeholder="Username"
        value={form.username}
        onChange={(e) => inputHandler(e)}
      />
      <Input
        name="email"
        fluid
        placeholder="Email"
        value={form.email}
        onChange={(e) => inputHandler(e)}
      />
      <Input
        name="password"
        type="password"
        value={form.password}
        fluid
        placeholder="Password"
        onChange={(e) => inputHandler(e)}
      />
      <Button onClick={submitHandler}>Submit</Button>
    </Container>
  );
}

export default RegisterComp;
