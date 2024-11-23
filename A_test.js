function get_text_from_url() {
  var url = 'https://tr.game.onstove.com/news/update.asp'; // URL을 원하는 주소로 변경하세요.
  var response = UrlFetchApp.fetch(url);
  var htmlSource = response.getContentText('EUC-KR');
  // var htmlSource = response.getContentText('UTF-8');
  // 
  docsClearAddText({ contentText: htmlSource })
  return ''
}


// JSON 데이터 파싱 전 텍스트 클린업 함수
function cleanJsonString(jsonString) {
  return jsonString
    .replace(/\\n/g, "") // 줄바꿈 제거
    .replace(/\\t/g, "") // 탭 문자 제거
    .replace(/\r?\n|\r/g, " ") // 추가 줄바꿈 문자 제거
    .replace(/\\/g, ""); // 백슬래시 제거
}



function createKinnaverWordpress_20241123() {
  var kinNvaerContext = fetchGoogleTrendsItems()[0];
  // var kinNvaerContext = getContentKinNaverNoImage();
  if (0 === kinNvaerContext) {
    return 0
  }
  var jsonTextObject = getPost(kinNvaerContext);
  Logger.log(jsonTextObject)
  // docsClearAddText({ contentText: jsonTextObject });


  var questionText = jsonTextObject[2].content.slice(0, -12);

  var cleanContent1 = cleanJsonString(jsonTextObject[3].content);
  var gptText1 = JSON.parse(cleanContent1).title;
  var gptText2 = JSON.parse(cleanContent1).content;

  var cleanContent2 = cleanJsonString(jsonTextObject[5].content);
  var gptText3 = JSON.parse(cleanContent2).title;
  var gptText4 = JSON.parse(cleanContent2).content;

  var cleanContent3 = cleanJsonString(jsonTextObject[7].content);
  var gptText5 = JSON.parse(cleanContent3).title;
  var gptText6 = JSON.parse(cleanContent3).content;


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
