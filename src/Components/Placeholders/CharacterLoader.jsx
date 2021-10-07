import React from "react";
import { Item, Placeholder } from "semantic-ui-react";

export function CharacterLoader() {
  return (
    <Item style={{ marginTop: "20px" }}>
      <Placeholder.Image square>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Image>

      <Item.Content>
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
      </Item.Content>
    </Item>
  );
}
