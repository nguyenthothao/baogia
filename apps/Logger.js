function writeLogs(filename ,message) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Logger');
    sheet.appendRow([new Date(), filename, message]);
}