const subjects = {
    Java: {
        title: "Java questions",
        questions: [
            {
                question: " Who invented java programming??",
                options: ["Dennis ritchie",
                "James Gosline",  
                "Ada Lovelase",  
                "Guido van rossom" ],
                answer: "James Gosline"
            },
            {
                question:  "Which component is used to compile, debug and execute the java problems?",
                options: ["JRE","JIT","JDK","JVM"],

                answer:"JDK"
            },
        {
            question:  "Which of these cannot be used for a variable name in Java?",
                options: [" identifier & keyword",
                    " identifier",
                     "keyword",
                     "none of the mentioned"],

                answer: "keyword"
        },
        {
            question:  "Which environment variable is used to set the java path?",
                options: [" MAVEN_Path",
                " JavaPATH",
                 "JAVA",
                 "JAVA_HOME"],

                answer: "JAVA_HOME"
        },
        {
            question:  " Which of the following is not an OOPS concept in Java?",
                options: [" Polymorphism",
                     "Inheritance",
                    "Compilation",
                    " Encapsulation "],

                answer: "Compilation"
        },
        {
            question: "What is the extension of compiled java classes? " ,
                options: [" .txt",
                     ".js",
                    ".class",
                     ".java"],

                answer: ".class"
        },
        {
            question:" Which of these are selection statements in Java?",  
                options: [" break",
                     "continue",
                    "for()",
                     "if()"],

                answer: "if()"
        },
        {
            question:  "Which of these keywords are used for the block to be examined for exceptions??",
                options: ["check",
                     "throw",
                     "catch",
                     "try"],

                answer: "try"
        },
        {
            question: " What is the numerical range of a char data type in Java? " ,
                options: [" 0 to 256",
                     "-128 to 127",
                    " 0 to 65535",
                     "0 to 32767"],

                answer: " 0 to 65535"
        },
        {
            question:  " Which of the below is not a Java Profiler?",
                options: ["JVM "," JProfiler","JConsole","Eclipse Profiler "],

                answer: "JVM "
        }
        ]
    },
    Python: {
        title: "Python questions",
        questions: [
            {
                question: " Which of the following is correct about Python?",
                options: ["Python is a high-level, interpreted, interactive and object-oriented scripting language",

                    "Python is designed to be highly readable",
                    
                     "It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages",
                    
                     "All of the above"
                    
                     ],
                answer:   "All of the above"
            },
            {
                question:   "Which of the following data types is not supported in python?",
                options: ["Numbers",

                " String",
                
                " List",
                
                " Slice"],

                answer: " Slice"
            },
        {
            question:  " Which of the following data types is not supported in python?",
                options: ["Tuple",

                    "Dictionary",
                    
                    " Generics",
                    
                     "List"],

                answer:  " Generics"
        },
        {
            question:   "What is the output of print str if str = 'Hello World!'?",
                options: ["  Hello World!",

                " Error",
                
                 "str",
                
                " None of the above"
                
                ],

                answer: "  Hello World!"
        },
        {
            question:  "What is the output of print tinylist * 2 if tinylist = [123, 'john']?",
                options: ["[123, 'john', 123, 'john']",

                "[123, 'john'] * 2",
                
                " Error",
                
                " None of the above."],

                answer:  "[123, 'john', 123, 'john']"
        },
        {
            question: "  For tuples and list which is correct? " ,
                options: ["List and tuples both are mutable.",

                    " List is mutable whereas tuples are immutable",
                    
                    "List and tuples both are immutable",
                    
                    "List is immutable whereas tuples are mutable."],

                answer:  " List is mutable whereas tuples are immutable"
        },
        {
            question:" Which of the following is more accurate for the following declaration? ",  
                options: [ "Now you can assign int value to x",

                    "x contains a reference to a Circle object",
                    
                    " x actually contains an object of type Circle",
                    
                    "x contains an int value" ],

                answer:  "x contains a reference to a Circle object"
        },
        {
            question:   " What is the output of print str[2:] if str = 'Hello World!'?",
                options: ["llo World!",

                    " H",
                    
                    " llo",
                    
                    " None of the above"],

                answer:  "llo World!"
        },
        {
            question: "  Select the correct function among them which can be used to write the data to perform for a binary output? " ,
                options: ["Write",

                "Output.binary",
                
                " Dump",
                
                " Binary.output  "],

                answer:  " Dump"
        },
        {
            question:  " Which keyword is used for function in Python language?",
                options: ["Function",
                     "def",
                    "Fun",
                 "Define"],

                answer:   "def"
        }
        ]
    },
    HTML: {
        title: "HTML question",
    questions: [
        {question: "Who is the father of HTML?",
        options: [
            "Rasmus Lerdorf",
            "Tim Berners-Lee",
            "Brendan Eich",
            "Sergey Brin"
        ],
        answer: "Tim Berners-Lee"

        },
        {
            question: "Which HTML element is used for short quote?",
            options: ["<em>", "<abbr>", "<q>", "<blockquote>"],
            answer: "<q>"
        },
        
        {
            question: "What is the correct syntax of doctype in HTML5?",
            options: [
                "</doctype html>",
                "<doctype html>",
                "<!doctype html!>",
                "<!doctype html>"
            ],
            answer: "<!doctype html>"
        },
        {
            question: "Which of the following is used to read an HTML page and render it?",
            options: [
                "Web server",
                "Web network",
                "Web browser",
                "Web matrix"
            ],
            answer: "Web browser"
        },
        {
            question: "Which of the following tag is used for inserting the largest heading in HTML?",
            options: [
                "<head>",
                "<h1>",
                "<h6>",
                "<heading>"
            ],
            answer: "<h1>"
        },
         
    {
        question:  " Which of the following HTML element is used for canvas graphics?" ,
            options: ["<css>",
                 "<paint>",
                "<canvas>",
                " <graphic>" ],

            answer:  "<canvas>"
    },
    {
        question: "Which HTML tag is used for making character appearance bold?",
                    options: [
                        "<u>content</u>",
                        "<b>content</b>",
                        "<br>content</br>",
                        "<i>content</i>"
                    ],
                    answer: "<b>content</b>"
                },
                {
                    question: "HTML is a subset of ___________",
                    options: ["SGMT", "SGML", "SGME", "XHTML"],
                    answer: "SGML"
                },
                {
                    question: "html comment should be enclosed between?",
                    options: ["<!– and — >",
                         "<! And !>",
                         "<!— and –“”",
                        "none of the above"],
                    answer:  "<!– and — >"
    },
    {
        question: "Which of the following HTML tag is used to add a row in a table?",
        options: ["<th>", "<td>", "<tr>", "<tt>"],
        answer: "<tr>"
    }
]    
    },
    CSS: {
        title: "CSS question",
    questions: [
        {
        question: "Which of the following is correct about CSS?",
                options: [
                    "CSS is used to control the style of a web document in a simple and easy way.",
                    "CSS is the acronym for 'Cascading Style Sheet'.",
                    "You can write CSS once and then reuse the same sheet in multiple HTML pages.",
                    "All of the above."
                ],
                answer: "All of the above."
            },
            {
                question: "Which of the following is a component of a CSS style rule?",
                options: [
                    "Selector",
                    "Property",
                    "Value",
                    "All of the above."
                ],
                answer: "All of the above."
            },
            {
                question: "Which of the following selector matches all elements of a type?",
                options: [
                    "The Type Selector",
                    "The Universal Selector",
                    "The Descendant Selector",
                    "The Class Selector"
                ],
                answer: "The Type Selector"
            },
            {
                question: "Which of the following selector matches an element based on its id?",
                options: [
                    "The Id Selector",
                    "The Universal Selector",
                    "The Descendant Selector",
                    "The Class Selector"
                ],
                answer: "The Id Selector"
            },
            {
                question: "Which of the following defines a measurement in inches?",
                options: [
                    "in",
                    "mm",
                    "pc",
                    "pt"
                ],
                answer: "in"
            },
            ]
},
             PhP: {
                   title: "PhP question",
          questions: [
            {
                question: "Which of the following is correct about PHP?",
                options: [
                    "PHP is a recursive acronym for 'PHP: Hypertext Preprocessor'.",
                    "PHP is a server-side scripting language that is embedded in HTML.",
                    "It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites.",
                    "All of the above."
                ],
                answer: "All of the above."
            },
            {
                question: "Using which of the following ways can you embed PHP code in an HTML page?",
                options: [
                    "<?php PHP code goes here ?>",
                    "<? PHP code goes here ?>",
                    "<script language='php'> PHP code goes here </script>",
                    "All of the above."
                ],
                answer: "All of the above."
            },
            {
                question: "Which of the following type of variables are whole numbers, without a decimal point, like 4195?",
                options: [
                    "Integers",
                    "Doubles",
                    "Booleans",
                    "Strings"
                ],
                answer: "Integers"
            },
            {
                question: "Which of the following type of variables have only two possible values either true or false?",
                options: [
                    "Integers",
                    "Doubles",
                    "Booleans",
                    "Strings"
                ],
                answer: "Booleans"
            },
            {
                question: "Which of the following type of variables are instances of programmer-defined classes?",
                options: [
                    "Strings",
                    "Arrays",
                    "Objects",
                    "Resources"
                ],
                answer: "Objects"
            },

          ]
        }
    };


let currentSubject;
let currentQuestionIndex;
let score = 0;
let timer;

function startQuiz(subject) {
    const subjectSelection = document.querySelector(".subject-selection");
    subjectSelection.style.display = "none";
    
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.style.display = "block";

    currentSubject = subject;
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    startTimer(60);
}

function showQuestion() {
    const currentQuestion = subjects[currentSubject].questions[currentQuestionIndex];

    document.getElementById("quiz-subject").textContent = subjects[currentSubject].title;
    document.getElementById("question-text").textContent = currentQuestion.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.textContent = option;
        optionElement.dataset.option = option;
        
        

        optionElement.addEventListener("click", optionClickHandler );
        optionsContainer.appendChild(optionElement);
    });
}
function checkAnswer(event, selectedOption) {
    const currentQuestion = subjects[currentSubject].questions[currentQuestionIndex];
    const allOptions = document.querySelectorAll("#options-container div");

    // Remove the event listeners properly
    allOptions.forEach((optionElement) => {
        optionElement.removeEventListener("click", optionClickHandler);
        optionElement.classList.remove("correct", "incorrect");
    });

    if (selectedOption === currentQuestion.answer) {
        score++;
        event.target.classList.add("correct");
    } else {
        event.target.classList.add("incorrect");

        const optionsContainer = document.getElementById("options-container");
        const correctOption = optionsContainer.querySelector(`div[data-option="${currentQuestion.answer}"]`);
        correctOption.classList.add("correct");
    }

    currentQuestionIndex++;

    
    if (currentQuestionIndex < subjects[currentSubject].questions.length) {
        setTimeout(showQuestion, 1000); 
    } else {
        setTimeout(endQuiz, 1000);  
    }
}

// Define a separate named function for the event listener
function optionClickHandler(event) {
    checkAnswer(event, event.target.textContent);
}

// Add event listeners to each option
const allOptions = document.querySelectorAll("#options-container div");
allOptions.forEach((optionElement) => {
    optionElement.addEventListener("click", optionClickHandler);
});

    

 

function startTimer(time) {
    const timeLeftElement = document.getElementById("time-left");
    let timeLeft = time;
    timeLeftElement.textContent = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.style.display = "none";

    const resultBox = document.querySelector(".result-box");
    resultBox.style.display = "block";

    const quizResult = document.getElementById("quiz-result");
    const quizResultScore = document.getElementById("quiz-result-score");

    // Calculate the score percentage
    const totalQuestions = subjects[currentSubject].questions.length;
    const percentage = (score / totalQuestions) * 100;

    // Display the score with the appropriate color
    if (percentage >= 50) {
        quizResult.textContent = "Congratulations! You passed the quiz!";
        quizResultScore.textContent = "Your score is: " + score + " out of " + totalQuestions;
        quizResultScore.style.color = "green"; // Change score color to green
    } else {
        quizResult.textContent = "You didn't pass the quiz. Try again!";
        quizResultScore.textContent = "Your score is: " + score + " out of " + totalQuestions;
        quizResultScore.style.color = "red"; // Change score color to red
    }
}

function restartQuiz() {
    const resultBox = document.querySelector(".result-box");
    resultBox.style.display = "none";

    const subjectSelection = document.querySelector(".subject-selection");
    subjectSelection.style.display = "block";
}
