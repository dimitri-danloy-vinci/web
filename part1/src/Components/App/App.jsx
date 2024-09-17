import Content from 'components/Content/Content';
const App = () => {
  const course = 'Half Stack application development'

  const totalExercises = 10 + 7 + 14

  return (
    <div>
      <h1>{course}</h1>
      <Content />
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

export default App
