import Dropdown from './components/Dropdown/Dropdown'
import useQueryParams from './hooks/useQueryParams'

function App() {
  return (
    <>
      <Dropdown>
        <Dropdown.Select>1</Dropdown.Select>
        <Dropdown.List>
          <Dropdown.Option>1</Dropdown.Option>
          <Dropdown.Option>2</Dropdown.Option>
          <Dropdown.Option>3</Dropdown.Option>
          <Dropdown.Option>4</Dropdown.Option>
          <Dropdown.Option>5</Dropdown.Option>
        </Dropdown.List>
      </Dropdown>
    </>
  )
}

export default App
