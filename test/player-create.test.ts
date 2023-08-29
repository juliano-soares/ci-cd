import { Player } from "../src/models/player";
import { playerCreate } from "../src/services/player-create";

describe("Create player", () => {
  it("create a player", () => {
    // Arrange
    const id: string = "1";
    const name: string = "John Doe";

    const player = new Player();
    player.id = id;
    player.name = name;

    // Act
    const playerCreateFunction = playerCreate({ id, name });

    // Assert
    expect(playerCreateFunction).toEqual(player);
  });
});
