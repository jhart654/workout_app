import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData'




const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true },
    { field: 'name', headerName: "Name", flex: 1 },
    { field: 'body_part', headerName: "Body Part", flex: 1 },
    { field: 'equipment', headerName: "Equipment", flex: 1 },
    { field: 'sets', headerName: "Sets", flex: 1 },
    { field: 'reps', headerName: "Reps", flex: 1 },
] 

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500 )
    }

    return (
        
        <>
        <Modal
            
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        
        <div id="modalbutton" className="flex flex-row">
            <div>
            <button
         className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
         onClick={() => handleOpen()}
         >
            Enter New Exercise
         </button>
         </div>
         <Button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white">Update</Button>
         <Button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white">Delete</Button>
        </div>
        <div id="datagrid" className={ open ? "hidden" : "container mx-10 my-5 flex flex-col" }
            
            >
            <h2 className="p-3 flex justify-center bg-slate-300 my-2 rounded">My Workouts</h2>
            <DataGrid
                
                rows={contactData} columns={columns} rowsPerPageOptions={[5]}
                checkboxSelection={true}
                onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            componentsProps={{
                pagination: {
                    rowsPerPageOptions: [5]
                }
            }}
            />
        </div>
        <div>
            
        </div>
        </>
    )
}

export default DataTable