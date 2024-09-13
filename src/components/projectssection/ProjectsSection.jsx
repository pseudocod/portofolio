import { renderProject } from "./renderProject.jsx";

export default function ProjectsSection() {
    const completedProjects = [
        {
            name: 'Full-Stack E-Commerce Project',
            link: '/projects/oricand',
            image: '/cafe.png',
        },
        {
            name: 'Full-Stack Blog Project',
            link: '/projects/oricand',
            image: '/football-blog.png',
        },
        {
            name: 'Full-Stack Banking Project',
            link: '/projects/oricand',
            image: '/bank-project.png',
        },
        {
            name: 'Spring Boot Backend Project',
            link: '/projects/oricand',
            image: '/spring-boot.png',
        },
        {
            name: 'ASP.NET CORE Backend Project',
            link: '/projects/oricand',
            image: '/asp-net.png',
        },
        {
            name: 'File System Analyzer Project',
            link: '/projects/oricand',
            image: '/c-project.png',
        },
        {
            name: 'Portfolio',
            link: '/projects/oricand',
            image: '/portfolio2.png',
        },
    ];

    const inProgressProjects = [
        {
            name: 'Premier League Full-Stack Project',
            link: '/projects/inprogress1',
            image: '/premier-league.jpg',
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
