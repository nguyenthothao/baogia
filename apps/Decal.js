function Decal(formObject) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVariables().sheetNames.decal);
  // TODO: set value from formObject "Số lượng đặt hàng (cái)" /name formObject.amount
  // TODO: set value from formObject "Số mặt in"
  sheet.getRange("D6").setValue(formObject.amount);
  sheet.getRange("D7").setValue(formObject.faces);

  SpreadsheetApp.flush();

  // TODO: get value after calculated
  // Số tờ in (khổ 32x47)
  // Bù hao
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