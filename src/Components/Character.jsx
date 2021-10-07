import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Item, Image, Label, Header, Icon } from "semantic-ui-react";
import { useFetch } from "../Hooks/useFetch";
import { getCharacter, setCharacter } from "../Redux/actions";
import { CharacterLoader } from "./Placeholders/CharacterLoader";

export function Character() {
  const { characterUrl, characterData } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { response } = useFetch(
    characterUrl || localStorage.getItem("character")
  );

  useEffect(() => {
    if (response) {
      dispatch(getCharacter(response));
      setIsLoading(false);
    }
  }, [response]);

  useEffect(() => {
    return () => {
      dispatch(setCharacter(null));
    };
  }, []);

  return (
    <>
      <Header as="h2">
        <Icon name="user" />
        <Header.Content>Character's Data</Header.Content>
      </Header>
      {isLoading ? (
        <CharacterLoader />
      ) : (
        <Item>
          <Item.Image
            src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4909/474909-h"
            size="medium"
          />

          <Item.Content>
            <Header as="a">Name :{characterData?.name || "No Name"}</Header>
            <Item.Meta>
              <span className="cinema">
                Played by:{characterData?.playedBy[0] || "No Data"}
              </span>
            </Item.Meta>
            {characterData?.titles && (
              <Item.Description>
                Title: {characterData?.titles[0] || "No data"}
              </Item.Description>
            )}
            {characterData?.tvSeries.length !== 0 && (
              <Item.Extra>
                {characterData?.tvSeries?.map((series) => (
                  <Label key={series}>{series}</Label>
                ))}
              </Item.Extra>
            )}
          </Item.Content>
        </Item>
      )}
    </>
  );
}
