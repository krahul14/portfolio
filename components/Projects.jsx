import React from "react"
import moviezy from "../public/assets/projects/moviezyimg.png"
import board from "../public/assets/projects/boardimg.png"
import vCare from "../public/assets/projects/vcareimg.png"
import beats from "../public/assets/projects/beats.png"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Board - RealTime Whiteboard"
            backgroundImg={board}
            projectUrl="https://board-swart.vercel.app/"
            description="A real-time whiteboard application with authentication."
            warning = ""
            tech="Next JS, TypeScript, Tailwind CSS, Clerk Auth, Convex"
            sourceCodeUrl="https://github.com/krahul14/Board"
          />
          <ProjectItem
            title="Beats - Music Player"
            backgroundImg={beats}
            projectUrl="https://beats-music.vercel.app/"
            description="A music player with custom UI and functionality."
            warning =""
            tech="React JS, JavaScript, Tailwind CSS"
            sourceCodeUrl="https://github.com/krahul14/music-player"
          />
          <ProjectItem
            title="Hospital Management System"
            backgroundImg={vCare}
            projectUrl="https://github.com/krahul14/Hospital-Management-System"
            description="Hospital Management System with CRUD operations."
            warning = ""
            tech="HTML, CSS, JavaScript, Django, Swiper Js"
            sourceCodeUrl="https://github.com/krahul14/Hospital-Management-System"
          />
          <ProjectItem
            title="Moviezy"
            backgroundImg={moviezy}
            projectUrl="https://moviezy.vercel.app/"
            description="Movie search application with infinite scroll."
            warning="***Ensure TMDB API is running in your country."
            tech="React JS, Redux,JavaScript, React-Skeleton, TMDB API"
            sourceCodeUrl="https://github.com/krahul14/Moviezy"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
