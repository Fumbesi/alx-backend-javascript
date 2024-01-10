/// <reference path="./task_3/js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './task_3/js/crud';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert a row and capture the returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete the row with the newRowID
CRUD.deleteRow(newRowID);
