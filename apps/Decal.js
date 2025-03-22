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

function getDropdownOptions() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Decal');
    var cell = sheet.getRange("D5"); // Ô chứa dropdown
    var validation = cell.getDataValidation(); // Lấy Data Validation của ô
    writeLogs('Decal', validation);
    if (validation) {
        var criteria = validation.getCriteriaValues(); // Lấy danh sách giá trị từ Data Validation
        if (criteria.length > 0) {
          if (typeof criteria[0] === "string") {
            var options = criteria[0].split(',').map(option => option.trim()); // Tách thành mảng
            Logger.log(options); // Xem kết quả trong Logger
            return options;
          } else if (criteria[0] && criteria[0].getValues) {
            var vals = criteria[0].getValues;
            Logger.log("vals: " + vals);
            var range = criteria[0]; // Lấy range chứa danh sách dropdown
            var values = range.getValues().flat(); // Lấy tất cả giá trị từ range
            Logger.log("List from a Range: " + values);
            return values;
          }

        }
    }
    Logger.log("No dropdown options found.");
    return [];
}
