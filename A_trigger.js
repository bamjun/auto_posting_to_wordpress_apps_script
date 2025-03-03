// 1. `get_text_from_url()`
//    - URL에서 텍스트를 가져오는 함수
//    - 'EUC-KR' 인코딩으로 HTML 소스를 가져옴

// 2. `cleanJsonString(jsonString)`
//    - JSON 문자열을 정리하는 유틸리티 함수
//    - 줄바꿈, 탭, 백슬래시 등을 제거

// 3. `createKinnaverWordpress_20241123()`
//    - Google Trends의 첫 번째 아이템을 가져와 워드프레스 포스트 생성
//    - 10가지 주제를 생성하고 포스트 내용 구성
//    - HTML 형식으로 콘텐츠 구성 후 워드프레스에 게시

// 4. `createKinnaverWordpress_20241123_10()`
//    - Google Trends의 다섯 번째 아이템을 가져와 워드프레스 포스트 생성
//    - 위 함수와 동일한 로직이지만 다른 인덱스의 트렌드 아이템 사용
//    - HTML 형식으로 콘텐츠 구성 후 워드프레스에 게시

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
  var kinNvaerContext = fetchGoogleTrendsItems()[5];

  // var kinNvaerContext = getContentKinNaverNoImage();
  if (0 === kinNvaerContext) {
    return 0
  }

  var getSubjectList10 = getJosnForList(kinNvaerContext.toString() + "관해 10가지 주제 알려줘");

  var jsonTextObject = getPost(kinNvaerContext);
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

  var getSubject1 = getJosnSinglePost(getSubjectList10.answer1.toString())
  var getSubject2 = getJosnSinglePost(getSubjectList10.answer2.toString())
  var getSubject3 = getJosnSinglePost(getSubjectList10.answer3.toString())
  var getSubject4 = getJosnSinglePost(getSubjectList10.answer4.toString())
  var getSubject5 = getJosnSinglePost(getSubjectList10.answer5.toString())
  var getSubject6 = getJosnSinglePost(getSubjectList10.answer6.toString())
  var getSubject7 = getJosnSinglePost(getSubjectList10.answer7.toString())
  var getSubject8 = getJosnSinglePost(getSubjectList10.answer8.toString())
  var getSubject9 = getJosnSinglePost(getSubjectList10.answer9.toString())
  var getSubject10 = getJosnSinglePost(getSubjectList10.answer10.toString())

  var totalText = '<h1>' + getSubject1.title + '</h1><br><br>' + getSubject1.content + '<br><br>' + '<h1>' + getSubject2.title + '</h1><br><br>' + getSubject2.content + '<br><br>' + '<h1>' + getSubject3.title + '</h1><br><br>' + getSubject3.content + '<br><br>' + '<h1>' + getSubject4.title + '</h1><br><br>' + getSubject4.content + '<br><br>' + '<h1>' + getSubject5.title + '</h1><br><br>' + getSubject5.content + '<br><br>' + '<h1>' + getSubject6.title + '</h1><br><br>' + getSubject6.content + '<br><br>' + '<h1>' + getSubject7.title + '</h1><br><br>' + getSubject7.content + '<br><br>' + '<h1>' + getSubject8.title + '</h1><br><br>' + getSubject8.content + '<br><br>' + '<h1>' + getSubject9.title + '</h1><br><br>' + getSubject9.content + '<br><br>' + '<h1>' + getSubject10.title + '</h1><br><br>' + getSubject10.content + '<br><br>' + questionText + '<h1>' + gptText1.toString() + '</h1><br><br>' + gptText2.toString() + '<br><br><h1>' + gptText3.toString() + '</h1><br><br>' + gptText4.toString() + '<br><br><h1>' + gptText5.toString() + '</h1><br><br>' + gptText6.toString();

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






function createKinnaverWordpress_20241123_10() {
  var kinNvaerContext = fetchGoogleTrendsItems()[5];

  // var kinNvaerContext = getContentKinNaverNoImage();
  if (0 === kinNvaerContext) {
    return 0
  }

  var getSubjectList10 = getJosnForList(kinNvaerContext.toString() + "관해 10가지 주제 알려줘");

  var jsonTextObject = getPost(kinNvaerContext);
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

  var getSubject1 = getJosnSinglePost(getSubjectList10.answer1.toString())
  var getSubject2 = getJosnSinglePost(getSubjectList10.answer2.toString())
  var getSubject3 = getJosnSinglePost(getSubjectList10.answer3.toString())
  var getSubject4 = getJosnSinglePost(getSubjectList10.answer4.toString())
  var getSubject5 = getJosnSinglePost(getSubjectList10.answer5.toString())
  var getSubject6 = getJosnSinglePost(getSubjectList10.answer6.toString())
  var getSubject7 = getJosnSinglePost(getSubjectList10.answer7.toString())
  var getSubject8 = getJosnSinglePost(getSubjectList10.answer8.toString())
  var getSubject9 = getJosnSinglePost(getSubjectList10.answer9.toString())
  var getSubject10 = getJosnSinglePost(getSubjectList10.answer10.toString())

  var totalText = '<h1>' + getSubject1.title + '</h1><br><br>' + getSubject1.content + '<br><br>' + '<h1>' + getSubject2.title + '</h1><br><br>' + getSubject2.content + '<br><br>' + '<h1>' + getSubject3.title + '</h1><br><br>' + getSubject3.content + '<br><br>' + '<h1>' + getSubject4.title + '</h1><br><br>' + getSubject4.content + '<br><br>' + '<h1>' + getSubject5.title + '</h1><br><br>' + getSubject5.content + '<br><br>' + '<h1>' + getSubject6.title + '</h1><br><br>' + getSubject6.content + '<br><br>' + '<h1>' + getSubject7.title + '</h1><br><br>' + getSubject7.content + '<br><br>' + '<h1>' + getSubject8.title + '</h1><br><br>' + getSubject8.content + '<br><br>' + '<h1>' + getSubject9.title + '</h1><br><br>' + getSubject9.content + '<br><br>' + '<h1>' + getSubject10.title + '</h1><br><br>' + getSubject10.content + '<br><br>' + questionText + '<h1>' + gptText1.toString() + '</h1><br><br>' + gptText2.toString() + '<br><br><h1>' + gptText3.toString() + '</h1><br><br>' + gptText4.toString() + '<br><br><h1>' + gptText5.toString() + '</h1><br><br>' + gptText6.toString();

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
