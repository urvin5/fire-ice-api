import moment from "moment";
import React from "react";
import { useHistory } from "react-router";
import { Button, Card, Icon } from "semantic-ui-react";
import { setCharacter } from "../Redux/actions";

export function BookCard({ book, dispatch }) {
  const history = useHistory();

  return (
    <Card style={{ marginTop: "20px" }}>
      <Card.Content>
        <Card.Header>{book.name}</Card.Header>
        <Card.Meta>
          <span className="date">
            Released on {moment(book?.released).format("MMM Do YY")}
          </span>
        </Card.Meta>
        <Card.Description>
          Author: {book.authors[0]} <br />
          Publisher : {book?.publisher}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          content="Get Top Character"
          floated="right"
          onClick={() => {
            history.push("/character");
            localStorage.setItem("character", book.povCharacters[0]);
            dispatch(setCharacter(book.povCharacters[0]));
          }}
        />
      </Card.Content>
    </Card>
  );
}
