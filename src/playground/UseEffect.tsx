import React, { useState, useEffect } from 'react';
import { Container, Button, Row } from 'reactstrap';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
}

type Users = User[];

const FunctionBasedComponent: React.FC<{ users: Users }> = ({ users: Users }) => {
  const [users, setUsers] = useState<Users>(Users);
  const [showDetails, setShowDetails] = useState(false);

  console.log(users);
  const fetchUsers = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowDetails(!showDetails);
  };

  return (
    <Container>
      {users?.map((user: User) => (
        <ul key={user.id}>
          <li>
            <strong>{user.name}</strong>
            <div>
              <Button onClick={handleClick}>{showDetails ? 'Close Additional Info' : 'More Info'}</Button>
              {showDetails && (
                <Container className="additional-info">
                  <Row>{`Email: ${user.email}`}</Row>
                  <Row>{`Phone: ${user.phone}`}</Row>
                  <Row>{`Website: ${user.website}`}</Row>
                </Container>
              )}
            </div>
          </li>
        </ul>
      ))}
    </Container>
  );
};

export default FunctionBasedComponent;
