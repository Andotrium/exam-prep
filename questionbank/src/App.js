import { useState } from "react";
import "./App.css"
import "./questions.js"
import { qb } from "./questions.js";

function Display({ q, a, ansgrid, fullgrid, updater, decrement }) {
  // const handleupdate = () => { console.log('yes') }

  return (
    <>
      <div className="playground">
        <div style={{width:"100%",height:"5%",
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-evenly",
          alignContent:"center"
        }}>
          <WrongPanel />
        <Prevbutton decrement={decrement} />
        <CorrectPanel />
        </div>
        
        
        
        <div className="questionpanel">
          <h1> {q} </h1>
        </div>
        <div className="optionpanel">
          {fullgrid.map(x => {
            return (
              <Options value={ansgrid[x - 1]} opclick={x} correctans={a} updater={updater} />
            )
          })}
        </div>
        <Nextbutton updater={updater} />
      </div>
    </>
  );
}

function Options({ value, opclick, correctans, updater }) {
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
  const handleclick = () => {
    if (opclick === correctans) {
      correct ++;
      setbaccy("green")
    }
    else {
      wrong ++;
      setbaccy("red")
    }
    setTimeout(() => {
      updater()
      setbaccy('rgba(61, 57, 57, 0.364)')
    }, 1000);
  }

  const handleOnMouseEnter = () => sethoverable(true)
  const handleOnMouseLeave = () => sethoverable(false)

  return (<>
    <div
      style={option_style}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleclick}>
      <h1>
        {value}
      </h1>

    </div>
  </>);
}

function Nextbutton({ updater }) {
  const [hoverable, sethoverable] = useState(false);
  const styling = {
    height: "5%",
    width: "5%",
    backgroundColor: !hoverable ? "rgba(53, 226, 171, 0.697)" : "white",
    border: "black 1px solid",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
  const hoveron = () => sethoverable(true)
  const hoverof = () => sethoverable(false)
  const handleclick = () => updater()
  return (
    <>
      <div
        className="button"
        style={styling}
        onMouseEnter={hoveron}
        onMouseLeave={hoverof}
        onClick={handleclick}>
        <p>Next</p>

      </div>
    </>
  )
}
function Prevbutton({ decrement }) {
  const [hoverable, sethoverable] = useState(false);
  const styling = {
    height: "100%",
    width: "5%",
    backgroundColor: !hoverable ? "rgba(53, 226, 171, 0.697)" : "white",
    border: "black 1px solid",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
  const hoveron = () => sethoverable(true)
  const hoverof = () => sethoverable(false)
  const handleclick = () => decrement()
  return (
    <>
      <div className="button"
        style={styling}
        onMouseEnter={hoveron}
        onMouseLeave={hoverof}
        onClick={handleclick}>
        <p>Previous</p>
      </div>
    </>
  )
}
let correct = 0;
let wrong = 0;

function CorrectPanel(){
  return(
    <div className="correct">
      <h1>correct:{correct} </h1>
    </div>
  )
}
function WrongPanel(){
  return(
    <div className="wrong" >
      <h1>wrong:{wrong} </h1>
    </div>
  )
}

// let serialnumber = 0;
export default function App() {
  const [serialnumber, setserialnumber] = useState(0);
  const [anslist, setanslist] = useState([
    qb[serialnumber].op1,
    qb[serialnumber].op2,
    qb[serialnumber].op3,
    qb[serialnumber].op4,
  ])
  const option_grid = ['1', '2', '3', '4']
  const handleretreat = () => {
    if(serialnumber > 0) {
      setserialnumber(serialnumber - 1);
      setanslist(
        [
          qb[serialnumber - 1].op1,
          qb[serialnumber - 1].op2,
          qb[serialnumber - 1].op3,
          qb[serialnumber - 1].op4,
        ]
      )
    }

  }
  const handleupdate = () => {
    if (serialnumber < 80) {
      setserialnumber(serialnumber + 1);
      setanslist(
        [
          qb[serialnumber + 1].op1,
          qb[serialnumber + 1].op2,
          qb[serialnumber + 1].op3,
          qb[serialnumber + 1].op4,
        ]
      )
     }


  }


  return (
    <>
      <Display
        q={qb[serialnumber].q}
        a={qb[serialnumber].ans}
        fullgrid={option_grid}
        ansgrid={anslist}
        updater={handleupdate}
        decrement={handleretreat}
      />
    </>);
}
