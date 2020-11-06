import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((courses) => {
        console.log(courses);
        setCourses(courses);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {courses.map((item, index) => (
          <li key={index}>
            {item.number} - {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

/*
type AppState = {
  message: string
}

class App extends React.Component<{},AppState> {
  state: AppState = {
    message: 'Default message',
  }

  componentDidMount() {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(obj => {
        this.setState({message: obj.message})
      })
  }
  render() {
    return(
      <div>
        {this.state.message}
      </div>
    )
  }
}
*/

export default App;
