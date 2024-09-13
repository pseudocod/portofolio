export const renderProject = (project) => (
    <div className='flex items-center'>
        <img
            src={project.image}
            alt={project.name}
            className={`absolute h-auto opacity-0 transition-opacity duration-300 ${
                (project.name === 'File System Analyzer Project' || project.name === 'Portfolio')
                    ? 'w-[12vw] left-[10vw]'
                    : 'w-[30vw] left-[2vw]'
            }`}
        />
        <a
            href={project.link}
            className='text-5xl hover:opacity-25 cursor-pointer transition-opacity ml-[40vw]'
            onMouseEnter={(e) => {
                const img = e.currentTarget.previousElementSibling;
                img.classList.remove('opacity-0');
                img.classList.add('opacity-100');
            }}
            onMouseLeave={(e) => {
                const img = e.currentTarget.previousElementSibling;
                img.classList.remove('opacity-100');
                img.classList.add('opacity-0');
            }}
        >
            {project.name}
        </a>
    </div>
);;