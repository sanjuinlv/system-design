import { Color } from "./color";

/**
 * Model class representing a single piece which can be moved on the board.
 */
class Piece {
  private isKilled: boolean;
  private readonly color: Color;
  private numMoves: number;
  private moveProvider: Array<PossibleMovesProvider>;
}

export default Piece;
