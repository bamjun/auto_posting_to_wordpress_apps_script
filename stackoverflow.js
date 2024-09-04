function stackoverflow() {
  var listOfWeb = stackoverflowList();
  var url = 'https://stackoverflow.com/questions/' + listOfWeb[0].toString(); // URL을 원하는 주소로 변경하세요.
  var response = UrlFetchApp.fetch(url);
  var htmlSource = response.getContentText();
  return extractStackOverFlowQuestion(htmlSource)
}



function extractStackOverFlowQuestion(html) {
  var pattern = /<a href="[^"]*" class="question-hyperlink">([^<]*)<\/a>/;
  var match = pattern.exec(html);
  var listValues = "";
  listValues = match ? match[1].trim() : null + "<br><br>";

  var pattern2 = /<div class="s-prose js-post-body" itemprop="text">([\s\S]*?)<div class="mt24 mb12">/;
  var match2 = pattern2.exec(html);

  listValues += match2 ? match2[1].trim() : null;

  return listValues
  
}




function stackoverflowList() {
  var url = 'https://stackoverflow.com/questions'; // URL을 원하는 주소로 변경하세요.
  // 웹 페이지 데이터 가져오기
  var response = UrlFetchApp.fetch(url);
  var content = response.getContentText();
  // 데이터 추출 패턴 정의
  var pattern = /class="s-post-summary\s+js-post-summary"\s+data-post-id="(\d+)"/g;
  var match;
  var postIdList = [];
  // 데이터 추출 및 리스트에 추가
  while ((match = pattern.exec(content)) !== null) {
    postIdList.push(match[1])
  }
  if (postIdList.length > 0) {
    return postIdList
  } else {
    Logger.log("No data found on the web page.");
  }
}




// https://stackoverflow.com/questions/
















// https://stackoverflow.com/questions



function getListOfKinNaverz() {
  var url = 'https://stackoverflow.com/questions'; // URL을 원하는 주소로 변경하세요.
  var response = UrlFetchApp.fetch(url);
  var htmlSource = response.getContentText();
  var tbodyContent = extractTbodyContentKinDotNaver(htmlSource);
  var finaltext = parsing_extractLinksKinDotNaver(tbodyContent);
  return finaltext
}

function getContentKinNaverz() {
  var listArticle = getListOfKinNaver();
  var url = listArticle[0];
  // url = "https://kin.naver.com/qna/detail.naver?d1id=11&dirId=11030302&docId=462067810"
  var response = UrlFetchApp.fetch(url);
  var htmlSource = response.getContentText();
  var article = extractDivContentKinNaverArticle(htmlSource)
  article = extractContentsKinNaverArticle(article)
  articleImage = extractImageUrls(article)
  articleContent = removeSpecificClassContent(article)
  return articleContent.toString()
}

function getContentKinNaverNoImagez() {
  var listArticle = getListOfKinNaver();
  let url, article, articleImage, articleContent;
  for (let i = 0; i < listArticle.length; i++) {
    url = listArticle[i];
    article = extractDivContentKinNaverArticle(urlResponse(url))
    article = extractContentsKinNaverArticle(article)
    articleImage = extractImageUrls(article)
    if (articleImage.length === 0) {
      articleContent = removeSpecificClassContent(article)
      return articleContent.toString()
    }
  }
  return 0
}
