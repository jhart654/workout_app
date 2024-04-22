import Background from '../assets/images/About.jpg'
import "./About.css"

function About() {
  return (
    <div
      id="background"
      className="flex justify-center place-items-center h-screen"
      style={{ backgroundImage: `url(${ Background })` }}
      >

      <h1 id="description">
            “Fit Buddy is a comprehensive tool for fitness enthusiasts
             to track and log their workout sessions with ease. With our
              user-friendly interface, you can effortlessly log in your workouts,
              specifying the body part targeted, equipment used, sets, and reps
               for each exercise. 
               
               In addition to workout logging, Fit Buddy features a stopwatch
                component that enhances your workout experience. The stopwatch
                 helps you time your rest intervals, monitor your workout duration,
                  and stay on track with your training schedule.

            Whether you are a beginner looking to establish a workout routine or
             an experienced athlete aiming to optimize your training, our workout
              app provides the tools you need to achieve your fitness goals
               effectively and efficiently. Start logging your workouts, track your
                progress, and take your fitness journey to the next level with our
                 innovative workout app."

      </h1>
    </div>
  )
}

export default About