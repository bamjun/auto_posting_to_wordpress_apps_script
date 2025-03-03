function fetchGoogleTrendsItems() {
  // RSS URL for Google Trends (Korea)
  const url =
    "https://trends.google.com/trending/rss?geo=KR";

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
  // Logger.log(result[5]);
  return result;
}
