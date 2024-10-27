const Header = ({ course }) => {
  return <h1 key='heading'>{course.name}</h1>
}

const Content = ({ course }) => {
  return course.parts.map((part) => <Part id={part.id} part={part.part} exercises={part.exercises}></Part>)
}

const Part = ({ id, part, exercises }) => {
  return (
    <p key={id}>
      {part} {exercises}
    </p>
    ) 
}

const Total = ({ course }) => {
  const result = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p key='total'>Number of exercises {result}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        part: 'Fundamentals of React',
        exercises: 10,
      },
      {
        id: 2,
        part: 'Using props to pass data',
        exercises: 7,
      },
      {
        id: 3,
        part: 'State of a component',
        exercises: 14,
      },
    ]
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  )
}

export default App