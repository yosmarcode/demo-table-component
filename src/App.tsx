import { useEffect, useState } from 'react'
import './App.css'
import { HeadCell, TableComponents } from 'table-component-mui-lib'
import NavBar from './components/NavBar'

const column: HeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: '#',
    sort: true
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Nombre',
    sort: true
  },
  {
    id: 'username',
    numeric: false,
    disablePadding: false,
    label: 'Usuario',
    sort: true
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Correo Eléctronico',
    sort: true
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'Teléfono',
    sort: true
  },
  {
    id: 'website',
    numeric: false,
    disablePadding: false,
    label: 'Página Oficial',
    sort: true
  },

]

function App() {
  const [selectedData, setSelectedData] = useState<unknown[]>([])
  const [data, setData] = useState<unknown[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setData(data  as unknown[])
      })
     

  }, [])


  return (
    <>
  <NavBar />
   <div style={{ paddingTop: '20px', padding: '20px', borderRadius: '20px' }}>
     <h1>Implementación de Table Component</h1>
      <TableComponents 
        selectedData={selectedData}
        setSelectedData={setSelectedData}
        isRadioBox={true}
        isCheckbox={false}
        dataSource={data ?? []} 
        columns={column} 
        search={true}
        isPaginate={true }
        isDowmload={true}
        _styleColumn={{backgroundColor: '#6765', color: '#000'}}
        childreButton={(row:unknown) => (
          <div style={{ display: 'flex', gap: 1, alignContent: 'center' }}>
            <button  onClick={() => alert(JSON.stringify(row))}>
            ✏️
            </button>

          </div>
        )}
         />
         </div>
    </>
  )
}

export default App
