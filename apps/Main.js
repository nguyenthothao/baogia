function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function main() {
  Logger.log('Loadding Main script!!');
}