const ILLEGAL_CELL_COORDINATE = 'Illegal cell coordinate'

export default class Cell {
  constructor(cell) {
    if (!cell.match(/^[A-Z]{1}[0-9]{1,2}$/)) throw new Error(ILLEGAL_CELL_COORDINATE)

    this.column = 'ABCDEFGHIJ'.indexOf(cell.match(/[A-Z]/)[0]) + 1
    this.row = parseInt(cell.match(/\d+/)[0])

    Cell.checkCellExists(this.column, this.row)
  }

  static checkCellExists(column, row) {
    if (column < 1 || column > 10 || row < 1 || row > 10) throw new Error(ILLEGAL_CELL_COORDINATE)
  }

  getRow() {
    return this.row
  }

  getColumn() {
    return this.column
  }
}
