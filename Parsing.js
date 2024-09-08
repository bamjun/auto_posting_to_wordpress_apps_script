function extractDivContentKinNaverArticle(html) {
  var pattern = /<div class="question-content">([\s\S]*?)<div class="c-userinfo__right" role="listbox">/;
  var match = pattern.exec(html);
  return match ? match[0].trim() : null;
}


function extractContentsKinNaverArticle(html) {
    var contents = [];
    var titlePattern = /<div class="title">([\s\S]*?)<\/div>/g;
    var contentPattern = /<div class="c-heading__content">([\s\S]*?)<\/div>/g;

    var titleMatch;
    while ((titleMatch = titlePattern.exec(html)) !== null) {
        contents.push(titleMatch[1].trim());
    }

    var contentMatch;
    while ((contentMatch = contentPattern.exec(html)) !== null) {
        contents.push(contentMatch[1].trim());
    }

    return contents;
}













function extractTbodyContentKinDotNaver(html) {
  var pattern = /<tbody id="au_board_list"[^>]*>([\s\S]*?)<\/tbody>/i;
  var match = pattern.exec(html);
  return match ? match[1] : null;
}

function parsing_extractLinksKinDotNaver(html) {
  var links = [];
  var regex = /<tr>[\s\S]*?<td class="title">[\s\S]*?<a href="(\/qna\/detail\.naver\?[\s\S]*?)"[\s\S]*?<\/tr>/g;

  var match;
  while ((match = regex.exec(html)) !== null) {
    links.push("https://kin.naver.com" + match[1]);
  }

  return links;
}




function extractImageUrls(text) {
    var urls = [];
    var regex = /data-image-src="([^"]+)"/g;
    var match;

    while ((match = regex.exec(text)) !== null) {
        urls.push(match[1]);
    }

    return urls;
}



function removeSpecificClassContent(html) {
    // _waitingForReplaceImage 클래스를 가진 span 태그와 내용을 모두 제거
    var updatedHtml = html.toString().replace(/<span class="_waitingForReplaceImage"[^>]*>[\s\S]*?<\/span>/g, '');
    return updatedHtml;
}



function fixJsonString(jsonString) {
    // 따옴표가 없는 키와 값을 찾아 정규 표현식을 사용하여 따옴표를 추가합니다.
    // 예: key: value -> "key": "value"
    return jsonString.replace(/(\w+):/g, '"$1":').replace(/: (\w+)/g, ': "$1"');
}



function docsClearAddText({contentText = "contentText=text", docId = test_doc_id}) {
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();
  body.clear()
  body.appendParagraph(contentText);
  doc_page_url = `https://docs.google.com/document/${docId}/edit`
  Logger.log(`doc_page_url : ${doc_page_url}`)
}


function docsClearText(docId = test_doc_id) {
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();
  body.clear()
  doc_page_url = `https://docs.google.com/document/${docId}/edit`
  Logger.log(`doc_page_url : ${doc_page_url}`)
}

function docsAddText({contentText = "contentText=text", docId = test_doc_id}) {
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();
  body.appendParagraph(contentText);
  doc_page_url = `https://docs.google.com/document/${docId}/edit`
  Logger.log(`doc_page_url : ${doc_page_url}`)
}