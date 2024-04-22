import DataTable from "../components/Datatable"
import Background from "../assets/images/Workout.jpg"
import './Workouts.css'

function Workouts() {
  return (
    <div
     id="background"
      className="flex justify-center place-items-center h-screen"
      style={{ backgroundImage: `url(${ Background })` }}
      >
      <div id="datatable">
      <DataTable />
    </div>
    </div>
  )
}

export default Workouts