/**
 * Default Column Options
 * @type {object}
 */
export const columnDefaults = {

  // pinned to the left
  frozenLeft: false,

  // pinned to the right
  frozenRight: false,

  // body cell css class name
  className: undefined,

  // header cell css class name
  headerClassName: undefined,

  // The grow factor relative to other columns. Same as the flex-grow
  // API from http://www.w3.org/TR/css3-flexbox/. Basically,
  // take any available extra width and distribute it proportionally
  // according to all columns' flexGrow values.
  flexGrow: 0,

  // Minimum width of the column.
  minWidth: 100,

  //Maximum width of the column.
  maxWidth: undefined,

  // The width of the column, by default (in pixels).
  width: 150,

  // If yes then the column can be resized, otherwise it cannot.
  resizable: true,

  // Custom sort comparator
  // pass false if you want to server sort
  comparator: undefined,

  // If yes then the column can be sorted.
  sortable: true,

  // Default sort asecending/descending for the column
  sort: undefined,

  // The cell renderer that returns content for table column header
  headerRenderer: undefined,

  // The cell renderer function(scope, elm) that returns React-renderable content for table cell.
  cellRenderer: undefined,

  // The getter function(value) that returns the cell data for the cellRenderer.
  // If not provided, the cell data will be collected from row data instead.
  cellDataGetter: undefined,

  // Adds +/- button and makes a secondary call to load nested data
  isTreeColumn: false,

  // Adds the checkbox selection to the column
  isCheckboxColumn: false,

  // Toggles the checkbox column in the header
  // for selecting all values given to the grid
  headerCheckbox: false,

  // Whether the column can automatically resize to fill space in the table.
  canAutoResize: true

};