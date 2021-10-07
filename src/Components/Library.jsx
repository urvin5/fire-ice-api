import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Grid, Header, Icon } from "semantic-ui-react";
import { useFetch } from "../Hooks/useFetch";
import { getAllBooks } from "../Redux/actions";
import { BookCard } from "../Components/BookCard";
import { BookLoader } from "../Components/Placeholders/BookLoader";
export function Library() {
  const dispatch = useDispatch();
  const { booksList = [] } = useSelector((state) => state.reducer);
  const [isLoading, setIsLoading] = useState(true);

  const { response } = useFetch("https://www.anapioficeandfire.com/api/books");

  useEffect(() => {
    if (response?.length) {
      dispatch(getAllBooks(response));
      setIsLoading(false);
    }
  }, [response]);

  return (
    <>
      <Header as="h2">
        <Icon name="book" />
        <Header.Content>Library</Header.Content>
      </Header>
      <Grid columns="three" stackable>
        <Grid.Row>
          {isLoading
            ? Array.from({ length: 10 }).map((x, index) => (
                <Grid.Column>
                  <BookLoader key={index} />
                </Grid.Column>
              ))
            : booksList?.map((book, index) => (
                <Grid.Column>
                  <BookCard book={book} key={index} dispatch={dispatch} />
                </Grid.Column>
              ))}
        </Grid.Row>
      </Grid>
    </>
  );
}
