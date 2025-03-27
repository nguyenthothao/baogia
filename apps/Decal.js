function Decal(formObject) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVariables().sheetNames.decal);
  // TODO: set value from formObject = { D5: '...', D6: '', D7: '', D8: '...', D12: '...', D13:'...' }
  writeLogs('Decal', JSON.stringify(formObject));
  writeLogs('Decal', Object.keys(formObject).join(' | '));
  Object.keys(formObject).forEach(function(key) {
    sheet.getRange(key).setValue(formObject[key]);
  });

  SpreadsheetApp.flush();

  var results = {
    message: 'Tính toán thất bại',
    success: false
  };

  // TODO: get value after calculated
  var soToCon = sheet.getRange("D10").getValue();
  var soToIn = sheet.getRange("D11").getValue();

  var pricing = {
    tienIn: sheet.getRange("F11").getValue(),
    tienCanMang: sheet.getRange("F12").getValue(),
    tienGiaCong: sheet.getRange("F13").getValue(),
    tongTien: sheet.getRange("E14:F14").getValue(),
    giaTien1Con: sheet.getRange("E15:F15").getValue()
  }

  if (soToCon) {
    results.message = 'Tính toán thành công';
    results.success = true;
    results.soToIn = soToIn;
    results.soToCon = soToCon;
    results.pricing = pricing;
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

// Luu gia tri vao sheet Queue
// function addRequestToQueueAndProcess(formObject, timeStamps) {
//   var keys = Object.keys(formObject);
//   var values = Object.values(formObject);
//   ss = SpreadsheetApp.getActiveSpreadsheet();
//   queueSheet = ss.getSheetByName('Queue');

//   if (!queueSheet) {
//     queueSheet = ss.insertSheet('Queue');
//     queueSheet.appendRow(['Timestamp', 'Status', ...keys]);
//   }

//   queueSheet.appendRow([timeStamps, 'Pending', ...values]);

//   processQueue();

//   return "Request processed immediately.";
// }

// function getLatestResponse(timeStamps) {
//   var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Responses");
//   if (!sheet) return { error: "Sheet not found" };

//   var data = sheet.getDataRange().getValues();
//   for (var i = data.length - 1; i > 0; i--) { // Duyệt ngược từ dưới lên
//     if (data[i][0] === timeStamps) { // So sánh timeStamps
//       return {
//         timestamp: data[i][0],
//         message: data[i][1],
//         success: data[i][2],
//         soToCon: data[i][3],
//         soToIn: data[i][4]
//       };
//     }
//   }
//   return { success: false, message: "No result found" };
// }

// function PostDecal(formObject) {
//   // Thêm vào hàng đợi và xử lý
//   var timeStamps = new Date().getTime();

//   addRequestToQueueAndProcess(formObject, timeStamps);
  
//   var result = getLatestResponse(timeStamps);

//   return result;
// }