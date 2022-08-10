import Piece from "./piece";

class Cell {
  private x: number;
  private y: number;
  private _currentPiece: Piece;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public isFree() {
    return this._currentPiece == null;
  }

  public get currentPiece() {
    return this._currentPiece;
  }

  public set currentPiece(piece: Piece) {
    this._currentPiece = piece;
  }
}

export default Cell;
