


function main() {
  // createKinnaverTistory(access_tokenZenowo, blogNameZenowo)

  tistoryImportCategory(blogNameZenowo, access_tokenZenowo)

}


function test1() {
  var category = '783173'
  createKinnaverTistory(access_tokenZenowo, blogNameZenowo, category)
}


function createKinnaverTistory(access_token, blogName, category) {
  var kinNvaerContext = getContentKinNaverNoImage();
  if (0 === kinNvaerContext) {
    Logger.log("이미지 있는 질문은 답변안하기.")
    return 0
  }
  var jsonTextObject = getPost(kinNvaerContext);

  var questionText = jsonTextObject[2].content.slice(0, -12);

  var gptText1 = JSON.parse(jsonTextObject[3].content);
  gptText1 = gptText1.title;
  var gptText2 = JSON.parse(jsonTextObject[3].content);
  gptText2 = gptText2.content;


  var gptText3 = JSON.parse(jsonTextObject[5].content);
  gptText3 = gptText3.title;
  var gptText4 = JSON.parse(jsonTextObject[5].content);
  gptText4 = gptText4.content;


  var gptText5 = JSON.parse(jsonTextObject[7].content);
  gptText5 = gptText5.title;
  var gptText6 = JSON.parse(jsonTextObject[7].content);
  gptText6 = gptText6.content;

  var totalText = questionText + '<h1>' + gptText1.toString() + '</h1><br><br>' + gptText2.toString() + '<br><br><h1>' + gptText3.toString() + '</h1><br><br>' + gptText4.toString() + '<br><br><h1>' + gptText5.toString() + '</h1><br><br>' + gptText6.toString();


  tistoryCreateWriting(gptText1, totalText, category, access_token, blogName)

}








function createKinnaverWordpress() {
  var kinNvaerContext = getContentKinNaverNoImage();
  if (0 === kinNvaerContext) {
    Logger.log("이미지 있는 질문은 답변안하기.")
    return 0
  }
  var jsonTextObject = getPost(kinNvaerContext);

  var questionText = jsonTextObject[2].content.slice(0, -12);

  var gptText1 = JSON.parse(jsonTextObject[3].content);
  gptText1 = gptText1.title;
  var gptText2 = JSON.parse(jsonTextObject[3].content);
  gptText2 = gptText2.content;


  var gptText3 = JSON.parse(jsonTextObject[5].content);
  gptText3 = gptText3.title;
  var gptText4 = JSON.parse(jsonTextObject[5].content);
  gptText4 = gptText4.content;


  var gptText5 = JSON.parse(jsonTextObject[7].content);
  gptText5 = gptText5.title;
  var gptText6 = JSON.parse(jsonTextObject[7].content);
  gptText6 = gptText6.content;

  var totalText = questionText + '<h1>' + gptText1.toString() + '</h1><br><br>' + gptText2.toString() + '<br><br><h1>' + gptText3.toString() + '</h1><br><br>' + gptText4.toString() + '<br><br><h1>' + gptText5.toString() + '</h1><br><br>' + gptText6.toString();
  createWordPressPost(gptText1, totalText)
}


function createStackOverFlowWordpress() {
  var kinNvaerContext = stackoverflow();
  if (0 === kinNvaerContext) {
    Logger.log("이미지 있는 질문은 답변안하기.")
    return 0
  }
  var jsonTextObject = getPostEnglish(kinNvaerContext);

  var questionText = jsonTextObject[2].content.slice(0, -12);

  var gptText1 = JSON.parse(jsonTextObject[3].content);
  gptText1 = gptText1.title;
  var gptText2 = JSON.parse(jsonTextObject[3].content);
  gptText2 = gptText2.content;


  var gptText3 = JSON.parse(jsonTextObject[5].content);
  gptText3 = gptText3.title;
  var gptText4 = JSON.parse(jsonTextObject[5].content);
  gptText4 = gptText4.content;


  var gptText5 = JSON.parse(jsonTextObject[7].content);
  gptText5 = gptText5.title;
  var gptText6 = JSON.parse(jsonTextObject[7].content);
  gptText6 = gptText6.content;

  var totalText = questionText + '<h1>' + gptText1.toString() + '</h1><br><br>' + gptText2.toString() + '<br><br><h1>' + gptText3.toString() + '</h1><br><br>' + gptText4.toString() + '<br><br><h1>' + gptText5.toString() + '</h1><br><br>' + gptText6.toString();
  createWordPressPost(gptText1, totalText)
}


















function createAutohotkey(blogName, access_token) {
  var nameOfPlace = openaiGpt("오토핫키로 코딩 할 수 있는 주제 1가지를 구체적으로 한줄로 단답형으로 알려줘")
  var listOfImageCreated = unsplashRandom("coding")
  var blogTitle = openaiGpt("Please write an attention-grabbing about " + nameOfPlace + " blog title in korean.").replace(/\"/g, "")
  var blogContent = openaiGpt(nameOfPlace + '이와 같은 주제에 관해 오토핫키 코드도 만들어 주고 상세하게 JSON형식 {title:, summary:, body:[{subtitle:, content: }, {subtitle:, content:}], end:}으로 content당 최소 4000자의 json리스트형식으로 지적으로 한글로 줘 { 앞에 아무 것도 넣지마')
  Logger.log(blogContent)
  blogContent = JSON.parse(blogContent)
  //에드핏, 에드센스 넣기 위해서, 컨텐트 문단 수가 2이하면 하나만 넣기.
  var randomIndex = getRandomNumbers(1, blogContent.body.length);
  if (listOfImageCreated.length == 0) {
    // unsplash 에서 이미지가, 0개가 나올수 있음, 그렇게 되면, 그림과 컨텐트글을 넣을때 오류 발생가능성이있기 때문에, 0개일때는 이미지를 안넣는 코드, 1개이상일때는 이미지는 넣는 코드를 입력.
    var imageCreated = tistoryCreateImage(openaiCreateImage(openaiGpt("Create a sentence within 10 characters in length that can evoke an image of " + nameOfPlace + " in english.")), access_token, blogName)
    // unsplash에서 이미지 검색결과가 없을때 쳇GPT에서 이미지 생성.
    var blogContentBody = '<br><br>';
    // 본문 글을 넣기위한 변수 생성
    for (i = 0; i < blogContent.body.length; i++) {
      if (randomIndex[0] == i) {
        blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br>" + '<figure class="ad-wp" contenteditable="false" data-ke-type="revenue" data-ad-vendor="adsense" data-ad-id-pc="211137" data-ad-id-mobile="211140"></figure>' + "<br><br>";
      } else if (randomIndex[1] == i) {
        blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br>" + '<figure class="ad-wp" contenteditable="false" data-ke-type="revenue" data-ad-vendor="adfit" data-ad-id-pc="282403" data-ad-id-mobile="282406"></figure>' + "<br><br>";
      } else {
        blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
      }
    }
    var contentText = imageCreated + "<div align='center'>It's an image created by AI.</div><br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
    tistoryCreateWriting(blogTitle, contentText, access_token, blogName)
  } else {
    // unsplash 에서 이미지가 1개이상일때 이미지 넣기.
    if (listOfImageCreated.length == 1) {
      var imageCreated = tistoryCreateImage(listOfImageCreated[0], access_token, blogName)
      var blogContentBody = '<br><br>';
      for (i = 0; i < blogContent.body.length; i++) {
        if (randomIndex[0] == i) {
          blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br>" + '<figure class="ad-wp" contenteditable="false" data-ke-type="revenue" data-ad-vendor="adsense" data-ad-id-pc="211137" data-ad-id-mobile="211140"></figure>' + "<br><br>";
        } else if (randomIndex[1] == i) {
          blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br>" + '<figure class="ad-wp" contenteditable="false" data-ke-type="revenue" data-ad-vendor="adfit" data-ad-id-pc="282403" data-ad-id-mobile="282406"></figure>' + "<br><br>";
        } else {
          blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
        }
      }
      var contentText = imageCreated + "<br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
      tistoryCreateWriting(blogTitle, contentText, access_token, blogName)
    } else {
      var imageCreated = tistoryCreateImage(listOfImageCreated[0], access_token, blogName)
      var post_id = tistoryCreateWriting('blogTitle', imageCreated + "<br><br>ing", access_token, blogName)
      Utilities.sleep(5 * 1000);
      var blogContentBody = '<br><br>';
      var listOfImageCreatedLength = listOfImageCreated.length - 1
      for (i = 0; i < blogContent.body.length; i++) {
        if (i < listOfImageCreatedLength) {
          if (randomIndex[0] == i) {
            blogContentBody = blogContentBody + tistoryCreateImage(listOfImageCreated[i + 1], access_token, blogName) + "<br><br><h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br>" + '<figure class="ad-wp" contenteditable="false" data-ke-type="revenue" data-ad-vendor="adsense" data-ad-id-pc="211137" data-ad-id-mobile="211140"></figure>' + "<br><br>";

          } else if (randomIndex[1] == i) {
            blogContentBody = blogContentBody + tistoryCreateImage(listOfImageCreated[i + 1], access_token, blogName) + "<br><br><h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br>" + '<figure class="ad-wp" contenteditable="false" data-ke-type="revenue" data-ad-vendor="adfit" data-ad-id-pc="282403" data-ad-id-mobile="282406"></figure>' + "<br><br>";

          } else {
            blogContentBody = blogContentBody + tistoryCreateImage(listOfImageCreated[i + 1], access_token, blogName) + "<br><br><h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
          }
        } else {

          if (randomIndex[0] == i) {
            blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br>" + '<figure class="ad-wp" contenteditable="false" data-ke-type="revenue" data-ad-vendor="adsense" data-ad-id-pc="211137" data-ad-id-mobile="211140"></figure>' + "<br><br>";
          } else if (randomIndex[1] == i) {
            blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br>" + '<figure class="ad-wp" contenteditable="false" data-ke-type="revenue" data-ad-vendor="adfit" data-ad-id-pc="282403" data-ad-id-mobile="282406"></figure>' + "<br><br>";
          } else {
            blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
          }
        }
      }
      var contentText = imageCreated + "<br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
      tistoryModify(post_id, blogTitle, contentText, access_token, blogName)
    }
  }
}






function createCookingZonandan() {
  var blogName = blogNameZonandan
  var access_token = access_tokenZonandan
  //카테고리 1094269 해외여행 1095221 요리
  var contentCategory = '1095221'
  var nameOfPlace = getRandomDestination(); //Hanoi in Vietnam
  var listOfImageCreated = unsplashRandom(nameOfPlace)
  var blogTitle = openaiGpt("Please write an attention-grabbing about " + nameOfPlace + " blog title in korean.").replace(/\"/g, "")
  var blogContent = openaiGpt(nameOfPlace + '여행 10일 이목을끄는 여행일정, 음식, 포토존을 JSON형식 {title:, summary:, body:[{subtitle:, content: }, {subtitle:, content:}], end:}으로 content당 1000자의 json리스트 감성적으로 한글로 줘')
  blogContent = JSON.parse(blogContent)
  if (listOfImageCreated.length == 0) {
    var imageCreated = tistoryCreateImage(openaiCreateImage(openaiGpt("Create a sentence within 10 characters in length that can evoke an image of " + nameOfPlace + " in english.")), access_token, blogName)
    var blogContentBody = '<br><br>';
    for (i = 0; i < blogContent.body.length; i++) {
      blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
    }
    var contentText = imageCreated + "<div align='center'>It's an image created by AI.</div><br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
    tistoryCreateWriting(blogTitle, contentText, contentCategory, access_token, blogName)
  } else {
    if (listOfImageCreated.length == 1) {
      var imageCreated = tistoryCreateImage(listOfImageCreated[0], access_token, blogName)
      var blogContentBody = '<br><br>';
      for (i = 0; i < blogContent.body.length; i++) {
        blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
      }
      var contentText = imageCreated + "<br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
      tistoryCreateWriting(blogTitle, contentText, contentCategory, access_token, blogName)
    } else {
      var imageCreated = tistoryCreateImage(listOfImageCreated[0], access_token, blogName)
      var post_id = tistoryCreateWriting('blogTitle', imageCreated + "<br><br>ing", contentCategory, access_token, blogName)
      Utilities.sleep(5 * 1000);
      var blogContentBody = '<br><br>';
      var listOfImageCreatedLength = listOfImageCreated.length - 1
      for (i = 0; i < blogContent.body.length; i++) {
        if (i < listOfImageCreatedLength) {
          blogContentBody = blogContentBody + tistoryCreateImage(listOfImageCreated[i + 1], access_token, blogName) + "<br><br><h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
        } else {
          blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
        }
      }
      var contentText = imageCreated + "<br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
      tistoryModify(post_id, blogTitle, contentText, access_token, blogName)
    }
  }
}






function createTravelZonandan() {
  var blogName = blogNameZonandan
  var access_token = access_tokenZonandan
  //카테고리 1094269 해외여행
  var contentCategory = '1094269'
  var nameOfPlace = getRandomDestination(); //Hanoi in Vietnam
  var listOfImageCreated = unsplashRandom(nameOfPlace)
  var blogTitle = openaiGpt("Please write an attention-grabbing about " + nameOfPlace + " blog title in korean.").replace(/\"/g, "")
  var blogContent = openaiGpt(nameOfPlace + '여행 10일 이목을끄는 여행일정, 음식, 포토존을 JSON형식 {title:, summary:, body:[{subtitle:, content: }, {subtitle:, content:}], end:}으로 content당 1000자의 json리스트 감성적으로 한글로 줘')
  blogContent = JSON.parse(blogContent)
  if (listOfImageCreated.length == 0) {
    var imageCreated = tistoryCreateImage(openaiCreateImage(openaiGpt("Create a sentence within 10 characters in length that can evoke an image of " + nameOfPlace + " in english.")), access_token, blogName)
    var blogContentBody = '<br><br>';
    for (i = 0; i < blogContent.body.length; i++) {
      blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
    }
    var contentText = imageCreated + "<div align='center'>It's an image created by AI.</div><br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
    tistoryCreateWriting(blogTitle, contentText, contentCategory, access_token, blogName)
  } else {
    if (listOfImageCreated.length == 1) {
      var imageCreated = tistoryCreateImage(listOfImageCreated[0], access_token, blogName)
      var blogContentBody = '<br><br>';
      for (i = 0; i < blogContent.body.length; i++) {
        blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
      }
      var contentText = imageCreated + "<br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
      tistoryCreateWriting(blogTitle, contentText, contentCategory, access_token, blogName)
    } else {
      var imageCreated = tistoryCreateImage(listOfImageCreated[0], access_token, blogName)
      var post_id = tistoryCreateWriting('blogTitle', imageCreated + "<br><br>ing", contentCategory, access_token, blogName)
      Utilities.sleep(5 * 1000);
      var blogContentBody = '<br><br>';
      var listOfImageCreatedLength = listOfImageCreated.length - 1
      for (i = 0; i < blogContent.body.length; i++) {
        if (i < listOfImageCreatedLength) {
          blogContentBody = blogContentBody + tistoryCreateImage(listOfImageCreated[i + 1], access_token, blogName) + "<br><br><h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
        } else {
          blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
        }
      }
      var contentText = imageCreated + "<br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
      tistoryModify(post_id, blogTitle, contentText, access_token, blogName)
    }
  }
}


function createTravelJaeyinee() {
  var blogName = blogNameJaeyinee
  var access_token = accessTokenJaeyinee
  //카테고리 1182394 해외여행
  var contentCategory = '1182394'
  var nameOfPlace = getRandomDestination(); //Hanoi in Vietnam
  var listOfImageCreated = unsplashRandom(nameOfPlace)
  var blogTitle = openaiGpt("Please write an attention-grabbing about " + nameOfPlace + " blog title in korean.").replace(/\"/g, "")
  var blogContent = openaiGpt(nameOfPlace + '여행 10일 이목을끄는 여행일정, 음식, 포토존을 JSON형식 {title:, summary:, body:[{subtitle:, content: }, {subtitle:, content:}], end:}으로 content당 1000자의 json리스트 감성적으로 한글로 줘')
  blogContent = JSON.parse(blogContent)
  if (listOfImageCreated.length == 0) {
    var imageCreated = tistoryCreateImage(openaiCreateImage(openaiGpt("Create a sentence within 10 characters in length that can evoke an image of " + nameOfPlace + " in english.")), access_token, blogName)
    var blogContentBody = '<br><br>';
    for (i = 0; i < blogContent.body.length; i++) {
      blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
    }
    var contentText = imageCreated + "<div align='center'>It's an image created by AI.</div><br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
    tistoryCreateWriting(blogTitle, contentText, contentCategory, access_token, blogName)
  } else {
    if (listOfImageCreated.length == 1) {
      var imageCreated = tistoryCreateImage(listOfImageCreated[0], access_token, blogName)
      var blogContentBody = '<br><br>';
      for (i = 0; i < blogContent.body.length; i++) {
        blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
      }
      var contentText = imageCreated + "<br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
      tistoryCreateWriting(blogTitle, contentText, contentCategory, access_token, blogName)
    } else {
      var imageCreated = tistoryCreateImage(listOfImageCreated[0], access_token, blogName)
      var post_id = tistoryCreateWriting('blogTitle', imageCreated + "<br><br>ing", contentCategory, access_token, blogName)
      Utilities.sleep(5 * 1000);
      var blogContentBody = '<br><br>';
      var listOfImageCreatedLength = listOfImageCreated.length - 1
      for (i = 0; i < blogContent.body.length; i++) {
        if (i < listOfImageCreatedLength) {
          blogContentBody = blogContentBody + tistoryCreateImage(listOfImageCreated[i + 1], access_token, blogName) + "<br><br><h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
        } else {
          blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
        }
      }
      var contentText = imageCreated + "<br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
      tistoryModify(post_id, blogTitle, contentText, access_token, blogName)
    }
  }
}

function createTravel() {
  var blogName = blogNameZenowo
  var access_token = access_tokenZenowo
  //카테고리 1362906 해외여행
  var contentCategory = '1362906'
  var nameOfPlace = getRandomDestination(); //Hanoi in Vietnam
  var listOfImageCreated = unsplashRandom(nameOfPlace)
  var blogTitle = openaiGpt("Please write an attention-grabbing about " + nameOfPlace + " blog title in korean.").replace(/\"/g, "")
  var blogContent = openaiGpt(nameOfPlace + '여행 10일 이목을끄는 여행일정, 음식, 포토존을 JSON형식 {title:, summary:, body:[{subtitle:, content: }, {subtitle:, content:}], end:}으로 content당 1000자의 json리스트 감성적으로 한글로 줘')
  blogContent = JSON.parse(blogContent)
  if (listOfImageCreated.length == 0) {
    var imageCreated = tistoryCreateImage(openaiCreateImage(openaiGpt("Create a sentence within 10 characters in length that can evoke an image of " + nameOfPlace + " in english.")), access_token, blogName)
    var blogContentBody = '<br><br>';
    for (i = 0; i < blogContent.body.length; i++) {
      blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
    }
    var contentText = imageCreated + "<div align='center'>It's an image created by AI.</div><br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
    tistoryCreateWriting(blogTitle, contentText, contentCategory, access_token, blogName)
  } else {
    if (listOfImageCreated.length == 1) {
      var imageCreated = tistoryCreateImage(listOfImageCreated[0], access_token, blogName)
      var blogContentBody = '<br><br>';
      for (i = 0; i < blogContent.body.length; i++) {
        blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
      }
      var contentText = imageCreated + "<br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
      tistoryCreateWriting(blogTitle, contentText, contentCategory, access_token, blogName)
    } else {
      var imageCreated = tistoryCreateImage(listOfImageCreated[0], access_token, blogName)
      var post_id = tistoryCreateWriting('blogTitle', imageCreated + "<br><br>ing", contentCategory, access_token, blogName)
      Utilities.sleep(5 * 1000);
      var blogContentBody = '<br><br>';
      var listOfImageCreatedLength = listOfImageCreated.length - 1
      for (i = 0; i < blogContent.body.length; i++) {
        if (i < listOfImageCreatedLength) {
          blogContentBody = blogContentBody + tistoryCreateImage(listOfImageCreated[i + 1], access_token, blogName) + "<br><br><h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
        } else {
          blogContentBody = blogContentBody + "<h2>" + blogContent.body[i].subtitle + "</h2>" + blogContent.body[i].content + "<br><br>";
        }
      }
      var contentText = imageCreated + "<br><br><h1>" + blogContent.title + "</h1>" + blogContent.summary + blogContentBody + "<h1>" + blogContent.end + "</h1>"
      tistoryModify(post_id, blogTitle, contentText, access_token, blogName)
    }
  }
}




//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////                                        ////////////////////////////////////////////////
//////////////                   메인 끝              ////////////////////////////////////////////////
//////////////                                       /////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////



function tistoryMultiImageCreate(listOfImageCreatedByBing, access_token, blogName) {
  var imageCreated = "";
  for (i = 1; i < listOfImageCreatedByBing.length; i++) {
    imageCreated = imageCreated + tistoryCreateImage(listOfImageCreatedByBing[i], access_token, blogName);
  }
  return imageCreated
}

function returnToday() {
  let today_ori = new Date();
  var today = String(today_ori.getFullYear()) + String(today_ori.getMonth() + 1).padStart(2, "0") + String(today_ori.getDate()).padStart(2, "0")
  return today
}
function tistoryCreateWriting(title, content, category, access_token, blogName) {
  var tistory_options = {
    'method': 'post',
    'payload': {
      'access_token': access_token,
      'output': 'json',
      'blogName': blogName,
      'title': title,
      'content': content,
      'visibility': "3",
      'category': category,  //1362449 사랑 //783173 잡동사니 //1362450 가족   //1362451 인생 //1362452 love
    },
  };
  data = UrlFetchApp.fetch("https://www.tistory.com/apis/post/write", tistory_options)
  return JSON.parse(data).tistory.postId
  // Logger.log(JSON.parse(data).tistory.postId)
}


function tistoryModify(post_id, title, content, access_token, blogName) {
  var modify_url = "https://www.tistory.com/apis/post/modify"
  var tistory_options = {
    'method': 'post',
    'payload': {
      'access_token': access_token,
      'output': 'json',
      'blogName': blogName,
      'postId': post_id,
      'title': title,
      'content': content,
      'visibility': '3'
    },
  };
  data = UrlFetchApp.fetch(modify_url, tistory_options)
}

function tistoryCreateImage(url, access_token, blogName) {
  var imageUrl = url;
  var modify_url = "https://www.tistory.com/apis/post/attach"
  var obtions_index = {
    'access_token': access_token,
    'blogName': blogName,
    'uploadedfile': UrlFetchApp.fetch(imageUrl).getBlob(),
  };
  var tistory_options = {
    'method': 'POST',
    'headers': {
      'contentType': 'multipart/form-data',
    },
    'payload': obtions_index,
  };

  var data = UrlFetchApp.fetch(modify_url, tistory_options)
  // Logger.log(data.getContentText());
  var titleRegex = /<replacer>([\s\S]*?)<\/replacer>/;
  // Logger.log(data.getContentText().match(titleRegex)[1].trim());
  return data.getContentText().match(titleRegex)[1].trim();

}


function tistoryImportCategory(blogName, access_token) {
  var url = "https://www.tistory.com/apis/category/list?"
    + "access_token=" + access_token
    + "&output=json"
    + "&blogName=" + blogName;
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  Logger.log(data);
  return data;

}




