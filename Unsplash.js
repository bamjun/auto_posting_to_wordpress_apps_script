
function unsplashRandom(query) {
  var API_KEY = unsplash_api_key001; // 발급받은 API Key 입력
  var url = "https://api.unsplash.com/photos/random?query=" + encodeURIComponent(query) + "&count=11&orientation=landscape";
  
  var response = UrlFetchApp.fetch(url, {
    headers: {
      "Authorization": "Client-ID " + API_KEY,
      "Accept-Version": "v1"
    }
  });
  
  var data = JSON.parse(response.getContentText());
  var dataList = [data[0].urls.small];

  for (i=1;i<data.length;i++){
    dataList.push(data[i].urls.regular)

  }
  return dataList
}

