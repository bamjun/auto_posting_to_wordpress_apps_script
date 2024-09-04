

function bingTest1() {

  
  docsClearAddText(searchBing())
}



function searchBing(searchTerm) {
  // var bingApiKey = '';
  var searchTerm = '2024년01월23일 주요뉴스';
  var language = 'ko-KR'; // 요청하는 언어 설정

  var endpointUrl = "https://api.bing.microsoft.com/v7.0/search?q=" + encodeURIComponent(searchTerm) + "&mkt=ko-KR";

  var response = UrlFetchApp.fetch(endpointUrl, {
    method: 'get',
    headers: {
      'Ocp-Apim-Subscription-Key': bingApiKey,
      'Accept-Language': language // Accept-Language 헤더 추가
      }
  });
  var snippet = [];
  var results = JSON.parse(response.getContentText());
  for (var i = 0; i < results.webPages.value.length; i++) {
  snippet.push(results.webPages.value[i].snippet);
  }
  Logger.log(snippet.join(''))
  // return JSON.stringify(results);
  return response.getContentText()
}



function searchNewsBing(searchTerm) {


  var endpointUrl = "https://api.bing.microsoft.com/v7.0/news/search?q=" + encodeURIComponent(searchTerm) + "&mkt=ko-KR";

  var response = UrlFetchApp.fetch(endpointUrl, {
    method: 'get',
    headers: {'Ocp-Apim-Subscription-Key': bingApiKey}
  });

  var results = JSON.parse(response.getContentText());
  // var be1 = [];
  // for (var i = 0; i < results.value.length; i++) {
  //   be1.push(results.value[i].name)
  //   be1.push(results.value[i].description)
  // }
  // return JSON.stringify(be1);
  var be1 = "";
  for (var i = 0; i < results.value.length; i++) {
    be1 = be1 + results.value[i].name
    be1 = be1 + results.value[i].description
  }
  return be1;
}









function searchImageBing(searchTerm) {
  // var bingApiKey = '';
  // var searchTerm = 'seoul in korea';
  // var language = 'ko-KR'; // 요청하는 언어 설정

  var endpointUrl = "https://api.bing.microsoft.com/v7.0/images/search?q=" + encodeURIComponent(searchTerm) +'&license=Public';

  var response = UrlFetchApp.fetch(endpointUrl, {
    method: 'get',
    headers: {
      'Ocp-Apim-Subscription-Key': bingApiKey,
      // 'Accept-Language': language // Accept-Language 헤더 추가
      }
  });
  var snippet = [];
  var results = JSON.parse(response.getContentText());
  for (var i = 0; i < results.pivotSuggestions[0].suggestions.length; i++) {
  snippet.push(results.pivotSuggestions[0].suggestions[i].thumbnail.thumbnailUrl);
  }
  // Logger.log(snippet)
  return snippet;
 
}
