
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="one-header">Welcome to My Website</header>
      <p className="one-para">One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.</p>

      <ul className="list">
        <li className="li-2">Item 1</li>
        <li className="li-2">Item 2</li>
        <li className="li-2">Item 3</li>
        <li className="li-2">Item 4</li>
        <li className="li-2">Item 5</li>
      </ul>

      <ul className="list-3">
      <li className="li-3">Item 1</li>
      <li className="li-3">Item 2</li>
      <li className="li-3">Item 3</li>
      <li className="li-3">Item 4</li>
      <li className="li-3">Item 5</li>
    </ul>

    <div>
      <input type="text" placeholder="Enter your email address" className="email-input"></input>
      <button className="submit-btn">Submit</button>
    </div>

    

    <div className="div-5">
      <img src="https://via.placeholder.com/350x150" alt="Random"></img>
      <p className="title">Card Title</p>
      <p>This is the description of the image.</p>
    </div>




    <div className="div-6">
      <img src="https://via.placeholder.com/350x150" alt="Random"></img>
      <p className="title">Card Title</p>
      <button>Click Me!</button>
    </div>

    <div className="div-7">
      <input type="text" placeholder="Search"></input>
    </div>
    
    </div>
  );
}

export default App;
