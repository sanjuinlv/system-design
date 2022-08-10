import Cell from "./cell";
import Piece from "./piece";
import { PieceType } from "./PieceType";
import Player from "./player";

class Board {
  private boardSize: number;
  private cells: Array<Array<Cell>>;

  constructor(boardSize: number, cells: Array<Array<Cell>>) {
    this.boardSize = boardSize;
    this.cells = cells;
  }

  public getLeftCell(cell: Cell): Cell {
    return this.getCellAtLocation(cell.getX(), cell.getY() - 1);
  }

  public getRightCell(cell: Cell): Cell {
    return this.getCellAtLocation(cell.getX(), cell.getY() + 1);
  }

  public getUpCell(cell: Cell) {
    return this.getCellAtLocation(cell.getX() - 1, cell.getY());
  }

  public getDownCell(cell: Cell) {
    return this.getCellAtLocation(cell.getX() + 1, cell.getY());
  }

  public getCellAtLocation(x: number, y: number) {
    if (x >= this.boardSize || x < 0) {
      return null;
    }
    if (y >= this.boardSize || y < 0) {
      return null;
    }
    return this.cells[x][y];
  }

  public isPlayerOnCheck(player: Player): boolean {
    return this.checkIfPieceCanBeKilled(
      player.getPiece(PieceType.KING),
      kingCheckEvaluationBlockers,
      player
    );
  }

  public checkIfPieceCanBeKilled(
    targetPiece: Piece,
    cellOccupyBlockers: PieceCellOccupyBlocker[],
    player: Player
  ): boolean {
    return true;
  }
}
