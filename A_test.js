function get_text_from_url() {
  var url = 'https://tr.game.onstove.com/news/update.asp'; // URL을 원하는 주소로 변경하세요.
  var response = UrlFetchApp.fetch(url);
  var htmlSource = response.getContentText('EUC-KR');
  // var htmlSource = response.getContentText('UTF-8');
  // 
  docsClearAddText({ contentText: htmlSource })
  return ''
}

function createKinnaverWordpress_20241123() {
  var kinNvaerContext = fetchGoogleTrendsItems()[0];
  // var kinNvaerContext = getContentKinNaverNoImage();
  if (0 === kinNvaerContext) {
    Logger.log("이미지 있는 질문은 답변안하기.")
    return 0
  }
  var jsonTextObject = getPost(kinNvaerContext);

  var questionText = jsonTextObject[2].content.slice(0, -12);

  var gptText1 = JSON.parse(jsonTextObject[3].content);
  gptText1 = gptText1.title;
  var gptText2 = JSON.parse(jsonTextObject[3].content);
  gptText2 = gptText2.content;


  var gptText3 = JSON.parse(jsonTextObject[5].content);
  gptText3 = gptText3.title;
  var gptText4 = JSON.parse(jsonTextObject[5].content);
  gptText4 = gptText4.content;


  var gptText5 = JSON.parse(jsonTextObject[7].content);
  gptText5 = gptText5.title;
  var gptText6 = JSON.parse(jsonTextObject[7].content);
  gptText6 = gptText6.content;

  var totalText = questionText + '<h1>' + gptText1.toString() + '</h1><br><br>' + gptText2.toString() + '<br><br><h1>' + gptText3.toString() + '</h1><br><br>' + gptText4.toString() + '<br><br><h1>' + gptText5.toString() + '</h1><br><br>' + gptText6.toString();

  createWordPressPost({
    url: wordpress_url,
    username: wordpress_username,
    password: wordpress_password,
    title: gptText1,
    content: totalText,
    status: 'publish',
    help: false
  })

}
