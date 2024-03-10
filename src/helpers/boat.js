import Cell from './cell'

export default class Boat {
  /**
   *
   * @param {Cell} startCell
   * @param {string} direction
   * @param {int} length
   */
  constructor(startCell, direction, length) {
    if (!['vertical', 'horizontal'].includes(direction)) throw new Error('Illegal direction value')
    if (length < 2 || length > 5) throw new Error('Illegal length value')

    checkLastCellExists(direction, startCell, length)

    this.startCell = startCell
    this.direction = direction
    this.length = length
  }
}

function checkLastCellExists(direction, startCell, length) {
  let row, column

  if (direction === 'vertical') {
    row = startCell.getRow() + length - 1
    column = startCell.getColumn()
  } else {
    row = startCell.getRow()
    column = startCell.getColumn() + length - 1
  }

  Cell.checkCellExists(column, row)
}
