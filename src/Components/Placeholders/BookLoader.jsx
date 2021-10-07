import React from "react";
import { Card, Placeholder, Icon, Button } from "semantic-ui-react";

export function BookLoader() {
  return (
    <Card style={{ marginTop: "20px" }}>
      <Card.Content>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length="medium" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="short" />
            <Placeholder.Line length="short" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        <Button disabled content="Get Top Character" floated="right" />
      </Card.Content>
    </Card>
  );
}
