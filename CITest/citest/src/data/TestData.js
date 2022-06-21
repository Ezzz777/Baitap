const TestData = {
    "response_code": 0,
    "score" : 0,
    "results": [
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which country will host the 2020 Summer Olympics?",
        "correct_answer": "Japan",
        "incorrect_answers": [
          "China",
          "Australia",
          "Germany"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What year did the New Orleans Saints win the Super Bowl?",
        "correct_answer": "2010",
        "incorrect_answers": [
          "2008",
          "2009",
          "2011"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which team has won the most Stanley Cups in the NHL?",
        "correct_answer": "Montreal Canadians",
        "incorrect_answers": [
          "Chicago Blackhawks",
          "Toronto Maple Leafs",
          "Detroit Red Wings"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which African American is in part responsible for integrating  Major League baseball?",
        "correct_answer": "Jackie Robinson",
        "incorrect_answers": [
          "Curt Flood",
          "Roy Campanella",
          "Satchell Paige"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The Los Angeles Dodgers were originally from what U.S. city?",
        "correct_answer": "Brooklyn",
        "incorrect_answers": [
          "Las Vegas",
          "Boston",
          "Seattle"
        ]
      }
    ]
}

export function getAllData(){
    return TestData.results;
}


