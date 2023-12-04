export const createUserMutation = `mutation createUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      _id,
      name,
      email,
      role
    }
  }
  `;
