import React from 'react';

const ProjectCard = () => {
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-purple-500 hover:bg-orange-400 h-full px-16 py-6 flex items-center">
      <div className="w-1/2">
        <img 
          src="/project-migramix-removebg-preview.png"
          className="w-full h-auto object-contain"
          alt="Project Image"
        />
      </div>
      <div className="ml-6 w-1/2">
        <h1 className="text-white font-semibold text-2xl mb-4">Project: aca va nombre de proyecto</h1>
        <p className="text-white mb-4">
          Descripcion del proyecto: sLorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita illum maiores qui voluptatem facere praesentium dignissimos doloribus, possimus ipsum nobis nulla nisi voluptas nostrum, quisquam natus vitae debitis, dolores quam!
        </p>
        <button
          className="bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-pink-600 text-sm shadow-xl"
        >
          Go to GitHub
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

