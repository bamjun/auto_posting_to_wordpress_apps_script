function get_text_from_url() {
  var url = 'https://tr.game.onstove.com/news/update.asp'; // URL을 원하는 주소로 변경하세요.
  var response = UrlFetchApp.fetch(url);
  var htmlSource = response.getContentText('EUC-KR');
  // var htmlSource = response.getContentText('UTF-8');
  // 
  docsClearAddText({contentText: htmlSource})
  return ''
}


