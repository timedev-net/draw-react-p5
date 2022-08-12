import logo from './logo.svg';
import './App.css';
import Sketch from "react-p5";

function App() {

let x = 50;
let y = 50;

  const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.background(230);
    p5.strokeWeight(2);  
	};

	const draw = (p5) => {
		// p5.background(0);
		// p5.ellipse(x, y, 70, 70);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
		// x++;

    if (p5.mouseIsPressed) {
      p5.stroke(255);
    } else {
      p5.stroke(237, 34, 93);
    }
    p5.line(p5.mouseX - 66, p5.mouseY, p5.mouseX + 66, p5.mouseY);
    p5.line(p5.mouseX, p5.mouseY - 66, p5.mouseX, p5.mouseY + 66);
	};
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
            4º Período IFRO
        </p>
        <Sketch setup={setup} draw={draw} />
      
      </header>
    </div>
  );
}

export default App;
