import { Game } from "../entities/Game";
import DefintionItem from "./DefintionItem";
import { SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefintionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefintionItem>
      <DefintionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefintionItem>
      <DefintionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefintionItem>
      <DefintionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefintionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
