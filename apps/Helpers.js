function getDropdownOptions(sheetName, cellName) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    if (!sheet) {
      writeLogs(sheetName, "Sheet " + sheetName + " không tồn tại!")
      return [];
    }
    var cell = sheet.getRange(cellName); // Ô chứa dropdown
    var rule = cell.getDataValidation();
    if (!rule) {
      writeLogs(sheetName, "Không có Data Validation trong ô " + cellName + "!")
      return [];
    }
    if (rule) {
      var criteria = rule.getCriteriaType(); 
      if (criteria === SpreadsheetApp.DataValidationCriteria.VALUE_IN_RANGE) {
        var range = rule.getCriteriaValues()[0]; // Lấy range của dropdown
        var vals = range.getValues().flat();
        writeLogs('Decal', vals.join(' | '));
        return vals; // Trả về danh sách các giá trị trong range
      }
    }
    return [];
  }
  