


function getPost(askGPT) {
  // askGPT = "쏘카 배달되는 시간??,아침시간에 서울에서 쏘카예약하면 집앞까지 차 가져다 주는데 통상 얼마나 걸리나요?? <div><br>"
  var toss = [{ "role": "system", "content": "You are a helpful assistant designed to output JSON." }, { "role": "system", "content": "You are a writer who writes the answer to a question in Korean like a news article when asked. respons JSON FORM must be {'title':'title', 'content':'your answer'}" }]

  toss.push({ "role": "user", "content": askGPT + "에 대해 자세히 알려줘" })
  var gptResponse = gptJson(toss)
  var gptcontent = JSON.parse(gptResponse.choices[0].message.content)
  toss.push({ "role": gptResponse.choices[0].message.role, "content": '{"title":"' + gptcontent.title + '", "content":"' + gptcontent.content + '"}' })
  toss.push({ "role": "user", "content": "대화의 주요 키워드 2개 단어 알려주고, 그 단어에 대한 설명해줘. JSON {'title':'키워드1:your word, 키워드2: your word', 'content':'키워드1 설명: your answer <br><br> 키워드2 설명: your answer'}" })
  gptResponse = gptJson(toss)
  gptcontent = JSON.parse(gptResponse.choices[0].message.content)
  toss.push({ "role": gptResponse.choices[0].message.role, "content": '{"title":"' + gptcontent.title + '", "content":"' + gptcontent.content + '"}' })
  toss.push({ "role": "user", "content": "지금까지 내용에 따라 사람들의 이목을 끄는 마무리 글 써줘. JSON {'title':'title', 'content':'your answer'}" })
  gptResponse = gptJson(toss)
  gptcontent = JSON.parse(gptResponse.choices[0].message.content)
  toss.push({ "role": gptResponse.choices[0].message.role, "content": '{"title":"' + gptcontent.title + '", "content":"' + gptcontent.content + '"}' })
  // docsClearAddText(JSON.stringify(toss))
  return toss
}


function getPostEnglish(askGPT) {
  var toss = [{ "role": "system", "content": "You are a helpful assistant designed to output JSON." }, { "role": "system", "content": "You are a writer who writes the answer to a question in English like a news article when asked. respons JSON FORM must be {'title':'title', 'content':'your answer'}" }]

  toss.push({ "role": "user", "content": "Tell me more step by step about " + askGPT})
  var gptResponse = gptJson(toss)
  var gptcontent = JSON.parse(gptResponse.choices[0].message.content)
  toss.push({ "role": gptResponse.choices[0].message.role, "content": '{"title":"' + gptcontent.title + '", "content":"' + gptcontent.content + '"}' })
  toss.push({ "role": "user", "content": "Tell me the 2 main keywords of the conversation and explain them. JSON {'title': 'Keyword 1: Your word, Keyword 2: Your word', 'content': 'Keyword 1 Explained: your answer <br>Keyword 2 Explained: your answer'}" })
  gptResponse = gptJson(toss)
  gptcontent = JSON.parse(gptResponse.choices[0].message.content)
  toss.push({ "role": gptResponse.choices[0].message.role, "content": '{"title":"' + gptcontent.title + '", "content":"' + gptcontent.content + '"}' })
  toss.push({ "role": "user", "content": "Please write a closing comment that will attract people's attention according to the contents so far. JSON {'title':'title', 'content':'your answer'}" })
  gptResponse = gptJson(toss)
  gptcontent = JSON.parse(gptResponse.choices[0].message.content)
  toss.push({ "role": gptResponse.choices[0].message.role, "content": '{"title":"' + gptcontent.title + '", "content":"' + gptcontent.content + '"}' })
  // docsClearAddText(JSON.stringify(toss))
  return toss
}


function gptJson(messages) {
  var url = 'https://api.openai.com/v1/chat/completions';
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + openaiApiKey
  };
  var data = {
    'model': 'gpt-3.5-turbo-1106',
    'temperature': 1,
    'response_format': { 'type': 'json_object' },
    'messages': messages,
  };
  var options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(data)
  };
  var response = UrlFetchApp.fetch(url, options);
  var result = JSON.parse(response.getContentText());
  return result
}
















/////////😘😒😘💕😂❄️🍔☃️❤️🤣😁👍🙌🤦‍♀️🤦‍♂️///////////////////////////////////////////////
/////////😘😒😘💕😂❄️🍔☃️❤️🤣😁👍🙌🤦‍♀️🤦‍♂️///////////////////////////////////////////////
/////////😘😒😘💕😂❄️🍔☃️❤️🤣😁👍🙌🤦‍♀️🤦‍♂️///////////////////////////////////////////////
/////////😘😒😘💕😂❄️🍔☃️❤️🤣😁👍🙌🤦‍♀️🤦‍♂️///////////////////////////////////////////////
/////////😘😒😘💕😂❄️🍔☃️❤️🤣😁👍🙌🤦‍♀️🤦‍♂️///////////////////////////////////////////////
/////////😘😒😘💕😂❄️🍔☃️❤️🤣😁👍🙌🤦‍♀️🤦‍♂️///////////////////////////////////////////////


function openaiGpt(contentText1) {
  // var openaiApiKey = '';
  
  var url = 'https://api.openai.com/v1/chat/completions';
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + openaiApiKey
  };
  var data = {
    // 'model': 'gpt-4',
    'model': 'gpt-3.5-turbo-0301',
    'temperature': 1,
    // 'messages': [{"role": "user", "content": "다음 내용 참조해서, 삼성전자에 대한 장문의 리포터 써줘"}, {"role": "user", "content": searchNewsBing()}],
    // 'messages': [{"role": "user", "content": "다음 내용 참조해서, 삼성전자 주가 이미지를 만들수 있는 10자 이내의 문장 만들어줘"}, {"role": "user", "content": searchNewsBing()}],
    // 'messages': [{"role": "user", "content": "다음 내용 참조해서, 삼성전자 리포터 제목 써줘"}, {"role": "user", "content": searchNewsBing()}],
    'messages': [{"role": "user", "content": contentText1}],
  };
  
  var options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(data)
  };
  var response = UrlFetchApp.fetch(url, options);
  var result = JSON.parse(response.getContentText());
  // var text = result.choices[0].text;
  // var length = text.length;
  // Logger.log(result.choices[0].message.content);
  return result.choices[0].message.content
}

function openaiGptFordestinations() {
  var url = 'https://api.openai.com/v1/chat/completions';
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + openaiApiKey
  };
  var data = {
    'model': 'gpt-3.5-turbo-0301',
    'temperature': 1,
    'messages': [{"role": "user", "content": 'Please write the names of 10 random cities in the name field and the names of the countries in the country field. [{"name": "","country": ""}, {"name": "","country": ""},]'}],
  };
  var options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(data)
  };
  var response = UrlFetchApp.fetch(url, options);
  var result = JSON.parse(response.getContentText());
  // var text = result.choices[0].text;
  // var length = text.length;
  // Logger.log(result.choices[0].message.content);
  return JSON.stringify(result.choices[0].message.content)
}


function openaiCreateImage(contentText) {
  // var openaiApiKey = '';
  
  var url = 'https://api.openai.com/v1/images/generations';
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + openaiApiKey
  };
  var data = {
    'prompt': contentText,
    'n': 1,
    'size': '256x256'
  };
  
  var options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(data)
  };
  
  var response = UrlFetchApp.fetch(url, options);
  var result = JSON.parse(response.getContentText());
  // var text = result.choices[0].text;
  // var length = text.length;
  // Logger.log(result.data[0].url);
  return result.data[0].url
}



function getRandomDestination() {
  var destinations = openaiGptFordestinations();
  destinations = JSON.parse(destinations)
  destinations = JSON.parse(destinations)
  var randomIndex = Math.floor(Math.random() * destinations.length);
  var destination = destinations[randomIndex];
  var message = destination.name + " in " + destination.country;
  return message
}





function openaiGptForFood() {
  var url = 'https://api.openai.com/v1/chat/completions';
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + openaiApiKey
  };
  var data = {
    'model': 'gpt-3.5-turbo-0301',
    'temperature': 0.5,
    'messages': [{"role": "user", "content": 'Please write the names of 10 foods in English [{"food": ""}, {"food": ""}]'}],
  };
  var options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(data)
  };
  var response = UrlFetchApp.fetch(url, options);
  var result = JSON.parse(response.getContentText());
  // var text = result.choices[0].text;
  // var length = text.length;
  Logger.log(result.choices[0].message.content);
  return JSON.stringify(result.choices[0].message.content)
}