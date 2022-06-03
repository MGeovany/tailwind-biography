import React from 'react'
import SquareCard from './SquareCard'

export const About = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-slate-100 my-10 pb-20"
      id="about"
    >
      <h1 className="font-bold text-3xl mt-24">Experience🪐</h1>

      <div className="flex flex-col justify-center ">
        <p className="text-center items-center text-gray-400 mt-9 mb-16 font-medium">
          Web Developer, Front-end and back-end <br />
          knowledge about MERN stack. Also huge knowledge <br />
          with sql databases too.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-28  justify-center items-center ">
        <SquareCard
          namec="Disney+ Clone"
          imgc="https://fv9-4.failiem.lv/thumb_show.php?i=kz562n5qg&view"
          desc="Disney+ is the home for your favorite movies and TV  shows from Disney, Pixar, and National Geographic."
          repo='https://github.com/MGeovany/Disney-Clone-G'
        />
        <SquareCard
          namec="BiDeskU"
          imgc="https://i.ibb.co/kxpD5hx/1.png"
          desc="BiDeskU is a web application that allows you to find the best place to work in your area. It's a collection of dashboards"
          repo='https://github.com/MGeovany/simple-todo-app'
        />
        <SquareCard
          namec="Auditab"
          imgc="https://i.ibb.co/r4FLHT7/ad.png"
          desc="Auditab is a web  that will help you to build better audit processes. You can check all your actives on your company"
          repo='https://github.com/MGeovany/Auditab'
        />
      </div>

    </div>
  )
}
