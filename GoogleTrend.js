function fetchGoogleTrendsItems() {
  // RSS URL for Google Trends (Korea)
  const url =
    "https://trends.google.com/trends/trendingsearches/daily/rss?geo=KR";

  // Fetch RSS feed
  const response = UrlFetchApp.fetch(url);
  const xml = response.getContentText();

  // Parse XML
  const document = XmlService.parse(xml);
  const root = document.getRootElement();

  // Get all items
  const items = root.getChild("channel").getChildren("item");

  // Extract item details
  const result = items.map((item) => {
    return item.getChildText("title");
  });

  // Log or return the results
  // Logger.log(result[0]);
  return result;
}



function getRandomItem() {
  // 리스트 정의
  const categories = [
    "여성패션", "남성패션", "뷰티", "출산/유아동", "식품", "주방용품", 
    "생활용품", "홈인테리어", "가전디지털", "스포츠/레저", "자동차용품", 
    "도서/음반/DVD", "완구/취미", "문구/오피스", "헬스/건강식품", 
    "국내여행", "해외여행", "반려동물용품", "유아동패션"
  ];
  
  // 랜덤 인덱스 생성
  const randomIndex = Math.floor(Math.random() * categories.length);
  
  // 랜덤 아이템 선택
  const randomItem = categories[randomIndex];
  
  // 결과 출력
  Logger.log("Random Item: " + randomItem);
  
  // 결과 반환
  return randomItem;
}
