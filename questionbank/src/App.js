import { useState } from "react";
import "./App.css"
import "./questions.js"
import { qb } from "./questions.js";

function Display({ q, a, ansgrid, fullgrid ,updater}) {


  return (
    <>
      <div className="playground">
        <div className="questionpanel">
          <h1> {q} </h1>
        </div>
        <div className="optionpanel">
          {fullgrid.map(x => {
            return (
              <Options value={ansgrid[x - 1]} opclick={x} correctans={a} update={updater} />
            )
          })}
        </div>
      </div>
    </>
  );
}

function Options({ value, opclick, correctans,update }) {
  const [hoverable, sethoverable] = useState(false)
  let [baccy, setbaccy] = useState("rgba(61, 57, 57, 0.364)")
  // hoverable?(const baccy = !hoverable ? "rgba(61, 57, 57, 0.364)" : "beige"):();
  if (hoverable && baccy == "rgba(61, 57, 57, 0.364)") { baccy = "beige" }

  let option_style = {
    width: "90%",
    height: "20%",
    backgroundColor: baccy,
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  }

  return (<>
    <div style={option_style} onMouseEnter={() => { sethoverable(true) }} onMouseLeave={() => { sethoverable(false) }} onClick={() => {
      if ({ opclick }.opclick == { correctans }.correctans) {
        // {update}
        // console.log(serialnumber)
        setbaccy("green")
      }
      else {
        setbaccy("red")
      }

    }}>
      <h1>
        {value}
      </h1>

    </div>
  </>);
}


// function qb {
//   const qb = [
//     {
//       serial: "0",
//       q: "What is the output of print(2 ** 3)?",
//       op1: "8",
//       op2: "6",
//       op3: "9",
//       op4: "7",
//       ans: "1"
//     },
//     {
//       serial: "1",
//       q: "Which of the following is the correct extension for Python files?",
//       op1: ".pt",
//       op2: ".py",
//       op3: ".pyt",
//       op4: ".p",
//       ans: "2"
//     },
//     {
//       serial: "2",
//       q: "What is the correct syntax to output the type of a variable or object in Python?",
//       op1: "print(typeof(x))",
//       op2: "print(typeOf(x))",
//       op3: "print(type(x))",
//       op4: "print(types(x))",
//       ans: "3"
//     },
//     {
//       serial: "3",
//       q: "Which of the following is a mutable data type in Python?",
//       op1: "str",
//       op2: "tuple",
//       op3: "list",
//       op4: "int",
//       ans: "3"
//     },
//     {
//       serial: "4",
//       q: "How do you insert COMMENTS in Python code?",
//       op1: "# This is a comment",
//       op2: "// This is a comment",
//       op3: "/* This is a comment */",
//       op4: "<!-- This is a comment -->",
//       ans: "1"
//     },
//     {
//       serial: "5",
//       q: "Which of the following functions can be used to read input from the user in Python?",
//       op1: "get()",
//       op2: "input()",
//       op3: "read()",
//       op4: "scan()",
//       ans: "2"
//     },
//     {
//       serial: "6",
//       q: "What will be the output of the following code?\nprint('Hello' * 3)",
//       op1: "HelloHelloHello",
//       op2: "Hello 3",
//       op3: "Hello, Hello, Hello",
//       op4: "Error",
//       ans: "1"
//     },
//     {
//       serial: "7",
//       q: "Which of the following statements is used to create a function in Python?",
//       op1: "function myFunction():",
//       op2: "def myFunction():",
//       op3: "create myFunction():",
//       op4: "fun myFunction():",
//       ans: "2"
//     },
//     {
//       serial: "8",
//       q: "What is the correct syntax for a for loop in Python?",
//       op1: "for i in range(5):",
//       op2: "for(i=0; i<5; i++)",
//       op3: "for i to 5",
//       op4: "foreach (i in range(5))",
//       ans: "1"
//     },
//     {
//       serial: "9",
//       q: "How do you create a dictionary in Python?",
//       op1: "dict = {'name':'John', 'age':25}",
//       op2: "dict = 'name' => 'John', 'age' => 25",
//       op3: "dict = ('name':'John', 'age':25)",
//       op4: "dict = {'name'->'John', 'age'->25}",
//       ans: "1"
//     },
//     {
//       serial: "10",
//       q: "What is the result of the following expression?\n3 + 4 * 2",
//       op1: "14",
//       op2: "11",
//       op3: "10",
//       op4: "12",
//       ans: "2"
//     },
//     {
//       serial: "11",
//       q: "Which keyword is used to create a class in Python?",
//       op1: "class",
//       op2: "create",
//       op3: "define",
//       op4: "struct",
//       ans: "1"
//     },
//     {
//       serial: "12",
//       q: "Which method is used to add an element at the end of a list in Python?",
//       op1: "append()",
//       op2: "insert()",
//       op3: "add()",
//       op4: "extend()",
//       ans: "1"
//     },
//     {
//       serial: "13",
//       q: "What will be the output of the following code?\nprint('Hello, World!'.lower())",
//       op1: "HELLO, WORLD!",
//       op2: "hello, world!",
//       op3: "Hello, World!",
//       op4: "hello, WORLD!",
//       ans: "2"
//     },
//     {
//       serial: "14",
//       q: "How do you start a block of code in Python?",
//       op1: "With curly braces {}",
//       op2: "With a semicolon ;",
//       op3: "With indentation",
//       op4: "With parentheses ()",
//       ans: "3"
//     },
//     {
//       serial: "15",
//       q: "Which of the following operators is used for string concatenation in Python?",
//       op1: "*",
//       op2: "&",
//       op3: "+",
//       op4: "%",
//       ans: "3"
//     },
//     {
//       serial: "16",
//       q: "Which of the following is a Python built-in function?",
//       op1: "sqrt()",
//       op2: "factorial()",
//       op3: "print()",
//       op4: "log()",
//       ans: "3"
//     },
//     {
//       serial: "17",
//       q: "What is the result of the following expression?\nlen([1, 2, 3, 4])",
//       op1: "4",
//       op2: "5",
//       op3: "3",
//       op4: "6",
//       ans: "1"
//     },
//     {
//       serial: "18",
//       q: "Which of the following data types is immutable in Python?",
//       op1: "list",
//       op2: "dict",
//       op3: "set",
//       op4: "tuple",
//       ans: "4"
//     },
//     {
//       serial: "19",
//       q: "What does the following code do?\nlist1 = [1, 2, 3]\nlist2 = list1.copy()",
//       op1: "Copies list1 to list2",
//       op2: "References list1 to list2",
//       op3: "Creates an alias for list1 as list2",
//       op4: "Clears list1 and assigns to list2",
//       ans: "1"
//     },
//     {
//       serial: "20",
//       q: "Which statement is used to stop a loop in Python?",
//       op1: "stop",
//       op2: "exit",
//       op3: "break",
//       op4: "terminate",
//       ans: "3"
//     },
//     {
//       serial: "21",
//       q: "What is the output of the following code?\nprint(type(5.0))",
//       op1: "<class 'int'>",
//       op2: "<class 'float'>",
//       op3: "<class 'double'>",
//       op4: "<class 'decimal'>",
//       ans: "2"
//     },
//     {
//       serial: "22",
//       q: "Which of the following is not a keyword in Python?",
//       op1: "with",
//       op2: "for",
//       op3: "fetch",
//       op4: "while",
//       ans: "3"
//     },
//     {
//       serial: "23",
//       q: "How do you declare a variable in Python?",
//       op1: "int x = 5",
//       op2: "x := 5",
//       op3: "x = 5",
//       op4: "declare x = 5",
//       ans: "3"
//     },
//     {
//       serial: "24",
//       q: "Which of the following functions can be used to get the ASCII value of a character in Python?",
//       op1: "ord()",
//       op2: "char()",
//       op3: "ascii()",
//       op4: "ordval()",
//       ans: "1"
//     },
//     {
//       serial: "25",
//       q: "What is the output of the following code?\nprint('Hello, {}'.format('Alice'))",
//       op1: "Hello, {}",
//       op2: "Hello, Alice",
//       op3: "Hello, {Alice}",
//       op4: "Hello, World!",
//       ans: "2"
//     },
//     {
//       serial: "26",
//       q: "What is the use of the pass statement in Python?",
//       op1: "To exit a function",
//       op2: "To skip the iteration",
//       op3: "To do nothing",
//       op4: "To pass control to another function",
//       ans: "3"
//     },
//     {
//       serial: "27",
//       q: "How do you check if a key exists in a dictionary in Python?",
//       op1: "if key in dict:",
//       op2: "if key exists dict:",
//       op3: "if key includes dict:",
//       op4: "if key has dict:",
//       ans: "1"
//     },
//     {
//       serial: "28",
//       q: "What is the output of the following code?\nprint(bool(0))",
//       op1: "True",
//       op2: "False",
//       op3: "0",
//       op4: "1",
//       ans: "2"
//     },
//     {
//       serial: "29",
//       q: "Which of the following modules in Python is used to generate random numbers?",
//       op1: "random",
//       op2: "rand",
//       op3: "math",
//       op4: "number",
//       ans: "1"
//     }
//   ]
  
//   return (
//     qb
//   );
// }


const serialnumber = 0

export default function App() {
  const [serialnumber,setserialnumber] = useState(1);
  const [anslist, setanslist] = useState([
    qb[serialnumber].op1,
    qb[serialnumber].op2,
    qb[serialnumber].op3,
    qb[serialnumber].op4,
  ])


  const option_grid = [1, 2, 3, 4]
  return (<>
    <Display q={qb[serialnumber].q} a={qb[serialnumber].ans} fullgrid={option_grid} ansgrid={anslist}
    updater={()=>
      {
        setserialnumber(serialnumber + 1);
        setanslist(
          [
            qb[serialnumber].op1,
            qb[serialnumber].op2,
            qb[serialnumber].op3,
            qb[serialnumber].op4,
          ]
        )
      }
    } />

  </>);
}