// // 지식인 게시글 링크
// function getListOfKinNaver(starting_point = 0, ending_point = 1) {
//   var url = "https://kin.naver.com/qna/list.naver"; // URL을 원하는 주소로 변경하세요.
//   var response = UrlFetchApp.fetch(url);
//   var htmlSource = response.getContentText();
//   var tbodyContent = extractTbodyContentKinDotNaver(htmlSource);
//   var finaltext = parsing_extractLinksKinDotNaver(tbodyContent);
//   return finaltext.slice(starting_point, ending_point);
// }

// function tempTest() {
//   // docsClearText()
//   var urls = getListOfKinNaver(0, 20);
//   urls.forEach(function (url) {
//     var json_result = extractContentKinNaver(url);
//     docsAddText({ contentText: `URL : ${url}` });
//     docsAddText({ contentText: `제목 : ${json_result.title}` });
//     docsAddText({ contentText: `내용 : ${json_result.content}` });
//     docsAddText({ contentText: `이미지 : ${json_result.images}` });
//   });
// }

// function getContentKinNaver() {
//   var url = getListOfKinNaver()[0];
//   Logger.log(url);
//   var response = UrlFetchApp.fetch(
//     "https://kin.naver.com/qna/detail.naver?d1id=4&dirId=4010301&docId=474881826"
//   );
//   var htmlSource = response.getContentText();
//   docsAddText({ contentText: htmlSource });
//   var article = extractDivContentKinNaverArticle(htmlSource);
//   article = extractContentsKinNaverArticle(article);
//   articleImage = extractImageUrls(article);
//   articleContent = removeSpecificClassContent(article);
//   Logger.log(articleContent.toString());
//   return articleContent.toString();
// }

// function extractContentKinNaver(url) {
//   var html = UrlFetchApp.fetch(url).getContentText(); // 실제 HTML을 가져오는 예시
//   // 제목 추출
//   var titlePattern =
//     /<div class="endTitleSection">[\s\S]*?<span class="iconQuestion">[\s\S]*?<\/span>[\s\S]*?<\/span>([\s\S]*?)<\/div>/;
//   var titleMatch = titlePattern.exec(html);
//   var title = titleMatch ? titleMatch[1].trim() : "제목을 찾을 수 없습니다.";

//   // 본문 내용 추출
//   var contentPattern =
//     /<div class="questionDetail[^"]*"[^>]*>([\s\S]*?)<\/div>/;
//   var contentMatch = contentPattern.exec(html);
//   var content = contentMatch
//     ? contentMatch[1].trim().replace(/<br>/g, "\n")
//     : "내용을 찾을 수 없습니다.";

//   var images = extractImageUrls(content);

//   // HTML 태그 제거 (본문에서 필요시)
//   content = content.replace(/<[^>]+>/g, "");

//   return {
//     title: title,
//     content: content,
//     images: images,
//   };
// }
// // https://kin.naver.com/qna/detail.naver?d1id=8&dirId=80511&docId=474881558
// // 이미지
// // https://kin.naver.com/qna/detail.naver?d1id=12&dirId=12093120&docId=474881314
// // 테스트
// // function testExtractContentKinNaver(url) {
// //     var html = UrlFetchApp.fetch(url).getContentText(); // 실제 HTML을 가져오는 예시
// //     var result = extractContentKinNaver(html);
// //     Logger.log("제목: " + result.title);
// //     Logger.log("내용: " + result.content);
// // }

// function getContentKinNaverNoImage() {
//   var listArticle = getListOfKinNaver();
//   let url, article, articleImage, articleContent;
//   for (let i = 0; i < listArticle.length; i++) {
//     url = listArticle[i];
//     article = extractDivContentKinNaverArticle(urlResponse(url));
//     article = extractContentsKinNaverArticle(article);
//     articleImage = extractImageUrls(article);
//     if (articleImage.length === 0) {
//       articleContent = removeSpecificClassContent(article);
//       return articleContent.toString();
//     }
//   }
//   return 0;
// }

// function urlResponse(url) {
//   var response = UrlFetchApp.fetch(url);
//   var htmlSource = response.getContentText();
//   return htmlSource;
// }
