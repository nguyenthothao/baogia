function Decal(formObject) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVariables().sheetNames.decal);
  // TODO: set value from formObject = { D5: '...', D6: '', D7: '', D8: '...', D12: '...', D13:'...' }
  writeLogs('Decal', JSON.stringify(formObject));
  writeLogs('Decal', Object.keys(formObject).join(' | '));
  Object.keys(formObject).forEach(function(key) {
    sheet.getRange(key).setValue(formObject[key]);
  });

  SpreadsheetApp.flush();

  // TODO: get value after calculated
  var soToCon = sheet.getRange("D10").getValue();
  var soToIn = sheet.getRange("D11").getValue();
  var results = {
    message: 'Tính toán thất bại',
    success: false
  }

  if (soToCon) {
    results.message = 'Tính toán thành công';
    results.success = true;
    results.soToIn = soToIn;
    results.soToCon = soToCon;
  }

  return results;
}

// DEMO log
function getCellValue() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Decal');
    var cellValue = sheet.getRange("D5").getValue(); // Lấy giá trị ô A1
    writeLogs(cellValue);
}

function initDecal() {
  var dropdownListD5 = getDropdownOptions('Decal', 'D5');
  writeLogs('Decal', dropdownListD5.join(' | '));
}