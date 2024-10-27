const Header = ({ course }) => {
  return <h1 key='heading'>{course}</h1>
}

const Content = ({ parts }) => {
  return parts.map((part) => <Part id={part.id} part={part.part} exercises={part.exercises}></Part>)
}

const Part = ({ id, part, exercises }) => {
  return (
    <p key={id}>
      {part} {exercises}
    </p>
    ) 
}

const Total = ({ parts }) => {
  const result = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p key='total'>Number of exercises {result}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

export default App