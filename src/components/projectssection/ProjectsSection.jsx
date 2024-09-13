import { renderProject } from "./renderProject.jsx";

export default function ProjectsSection() {
    const completedProjects = [
        {
            name: 'Full-Stack E-Commerce Project',
            link: '/projects/oricand',
            image: '/cafe.JPG',
        },
        {
            name: 'Full-Stack Blog Project',
            link: '/projects/oricand',
            image: '/cafe.JPG',
        },
        {
            name: 'Full-Stack Banking Project',
            link: '/projects/oricand',
            image: '/cafe.JPG',
        },
        {
            name: 'Spring Boot Backend Project',
            link: '/projects/oricand',
            image: '/cafe.JPG',
        },
        {
            name: 'ASP.NET CORE Backend Project',
            link: '/projects/oricand',
            image: '/cafe.JPG',
        },
        {
            name: 'File System Analyzer Project',
            link: '/projects/oricand',
            image: '/cafe.JPG',
        },
        {
            name: 'Portfolio',
            link: '/projects/oricand',
            image: '/cafe.JPG',
        },
    ];

    const inProgressProjects = [
        {
            name: 'Premier League Full-Stack Project',
            link: '/projects/inprogress1',
            image: '/cafe.JPG',
        },
    ];

    return (
        <>
            <div className='flex justify-center items-center mt-20'>
                <h1 className='text-8xl'>PROJECTS</h1>
            </div>

            <div className='relative mt-20 flex flex-col gap-5 mb-10'>
                {completedProjects.map(renderProject)}
            </div>

            <div className='ml-[40vw] mb-10'>
                <h1 className='text-6xl font-bold text-[#112A46]'>
                    IN PROGRESS
                </h1>
            </div>

            <div className='relative mt-5 flex flex-col gap-5 mb-52'>
                {inProgressProjects.map(renderProject)}
            </div>
        </>
    );
}
