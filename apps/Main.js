function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function main() {
  Logger.log('Loadding Main script!!');
  getCellValue();
}

// function doPost(formObject) {
//     // Thêm vào hàng đợi và xử lý
//     var timeStamps = new Date().getTime();

//     addRequestToQueueAndProcess(formObject, timeStamps);
    
//     // Lấy kết quả mới nhất từ sheet Responses
//     var result = getLatestResponse(timeStamps);
  
//     return ContentService.createTextOutput(JSON.stringify(result))
//       .setMimeType(ContentService.MimeType.JSON);
// }


// function processQueue() {
//   var lock = LockService.getScriptLock();
//   if (!lock.tryLock(10000)) { // Đợi tối đa 10 giây
//     Logger.log("Another process is running. Skipping...");
//     return;
//   }

//   var ss = SpreadsheetApp.getActiveSpreadsheet();
//   var queueSheet = ss.getSheetByName("Queue");
//   var responseSheet = ss.getSheetByName("Responses");
  
//   if (!queueSheet || !responseSheet) return;

//   var data = queueSheet.getDataRange().getValues();

//   for (var i = 1; i < data.length; i++) {
//     if (data[i][1] === "Processed") continue; 

//     var formObject = {
//       D5: data[i][2],
//       D6: data[i][3],
//       D7: data[i][4],
//       D8: data[i][5],
//       D12: data[i][6],
//       D13: data[i][7]
//     };

//     var results = Decal(formObject);

//     responseSheet.appendRow([data[i][0], results.message, results.success, results.soToCon, results.soToIn]);

//     // Đánh dấu đã xử lý
//     queueSheet.getRange(i + 1, 1).setValue("Processed");
//   }

//   lock.releaseLock();
// }