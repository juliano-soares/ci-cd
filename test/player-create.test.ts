import { Player } from "../src/models/player";
import { playerCreate } from "../src/services/player-create";

describe("Player Create", () => {
  it("create a Player", () => {
    // Arrange
    const name: string = "John Doe";
    const player = new Player();
    player.name = name;

    // Act
    const playerCreateFunction = playerCreate(player);

    // Assert
    expect(playerCreateFunction).toEqual(player);
  });
});
