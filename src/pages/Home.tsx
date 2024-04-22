
import Background from '../assets/images/gym.jpg'
import './Home.css'

function Home() {
  return (
    <div 
      id="background"
      style={{ backgroundImage: `url(${ Background })` }}
      >
        <div id="homeinfo" className="flex justify-center place-items-center h-screen">
          <h2 className="p-5 bg-white bg-opacity-75 text-red rounded">FIT BUDDY</h2>
        </div>
      </div>
  )
}

export default Home