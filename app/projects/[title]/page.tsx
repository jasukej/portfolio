import BackButton from '@/components/BackButton';
import { projectsData } from '@/lib/projectsData'
import React from 'react'

interface ProjectPageParams {
    title?: string
}

const ProjectPage = ({ params }: { params: ProjectPageParams }) => {
  
    const project = projectsData.find(( project ) => project.title === params.title );

    if (!project) {
        return (
            <div>No project found.</div>
        )
    }

    const {
        title,
        description,
        tags,
        imageUrl,
        category,
        github,
        external
    } = project;

  return (
    <div className="relative">
        <div className="
            absolute
            top-6 
            left-12">
            <BackButton />
        </div>
        <div className="h-[20rem]">
            <div 
            className="
                absolute
                top-[5rem]
            ">
                <div 
                className="
                    flex 
                    justify-center
                    w-auto">
                    {title}
                </div>
            </div>
            {/* IMAGE PLACEHOLDER */}
        </div>
        <div>

        </div>
    </div>
  )
}

export default ProjectPage