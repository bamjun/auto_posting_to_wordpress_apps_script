function createWordPressPost({
  url = wordpress_url,
  username = wordpress_username,
  password = wordpress_password,
  title = "Default Title",
  content = "Default Content",
  status = "draft",
  help = true,
} = {}) {
  if (help) {
    Logger.log("워드프레스 포스트 발행");
    Logger.log("----------------------------");
    Logger.log(`
url = wordpress_url \n
https://[워드프레스  주소]/index.php?rest_route=/wp/v2/posts \n
username = wordpress_username \n
password = wordpress_password \n
title = 'Default Title' \n
content = 'Default Content' \n
status = 'draft' \n
publish = 발행, draft = 임시 \n
help = true \n
true 설정시 함수 설명
`);
    return;
  }
  // The post data
  var data = {
    title: title,
    content: content,
    status: status,
  };

  // Encode credentials
  var credentials = Utilities.base64Encode(username + ":" + password);

  // Set up the request options
  var options = {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: "Basic " + credentials,
    },
    payload: JSON.stringify(data),
    muteHttpExceptions: true,
  };

  // Send the HTTP request
  var response = UrlFetchApp.fetch(url, options);

  // // Check the response
  // if (response.getResponseCode() == 201) {
  //   Logger.log('Post created successfully');
  // } else {
  //   Logger.log('Failed to create post');
  // }
}
