import { Link } from "react-router-dom";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
export function Navbar() {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Link to="/"> Fire and Ice</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/">Books</Link>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
