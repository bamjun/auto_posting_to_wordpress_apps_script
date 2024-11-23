
function aimlgptJson(messages) {
  var url = 'https://api.aimlapi.com/chat/completions';
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + '9990e2152988482e8bf54690266c4f16'
  };
  var data = {
    'model': 'text',
    'messages': messages,
  };
  var options = {
    'method': 'POST',
    'headers': headers,
    'payload': JSON.stringify(data),
    'muteHttpExceptions': true
  };
  var response = UrlFetchApp.fetch(url, options);
  var result = JSON.parse(response.getContentText());
  return result
}




function test111() {
  var text = aimlgptJson('hi')
  Logger.log(text)
}



function callOpenAI() {
  // OpenAI API URL
  var apiUrl = "https://api.aimlapi.com/chat/completions";

  // OpenAI API 키
  var apiKey = "9990e2152988482e8bf54690266c4f16"; // 여기에 OpenAI API 키를 입력하세요.

  // 요청에 필요한 메시지 데이터
  var requestData = {
    "model": "text", // 모델 이름 (원하는 모델로 변경 가능)
    "messages": [
      {
        "role": "system", 
        "content": "You are a helpful assistant." // 시스템 역할 설정
      },
      {
        "role": "user", 
        "content": "Tell me a joke." // 사용자 요청 메시지
      }
    ]
  };

  // API 요청 설정
  var options = {
    "method": "POST",
    "headers": {
      "Authorization": "Bearer " + apiKey,
      "Content-Type": "application/json"
    },
    "payload": JSON.stringify(requestData),
    "muteHttpExceptions": true // 에러 메시지 확인 가능하도록 설정
  };

  // API 호출
  try {
    var response = UrlFetchApp.fetch(apiUrl, options);
    var json = JSON.parse(response.getContentText());

    // 응답 메시지에서 AI의 답변을 추출
    var aiResponse = json.choices[0].message.content;
    Logger.log("AI Response: " + aiResponse);

    // 여기서 원하는 방식으로 AI 응답을 처리
    return aiResponse;

  } catch (error) {
    Logger.log("Error: " + error.toString());
  }
}
