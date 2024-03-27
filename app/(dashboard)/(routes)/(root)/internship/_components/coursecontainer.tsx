import React from 'react';
import Image from 'next/image';

interface CourseCardProps {
  src: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ src, altText, title, description, link }) => {
  return (
    <div className="lg:w-1/3 md:w-1/2 px-4 mb-8">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="relative h-0 pb-[75%]">
          <Image src={src} alt={altText} layout="fill" objectFit="cover" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 py-4">
          <a href={link} className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center">Learn More</a>
        </div>
      </div>
    </div>
  );
};

const CoursesContainer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        <CourseCard
          src="/image.png"
          altText="Course 1"
          title="Data Science"
          description="Training + Internship"
          link="/internship/courses/datascience"
        />
        <CourseCard
          src="/courses-2.jpg"
          altText="Course 2"
          title="Web Development"
          description="Training + Internship"
          link="/front-end-development-course.html"
        />
        <CourseCard
          src="/courses-4.jpg"
          altText="Course 3"
          title="Digital Marketing"
          description="Live Training + Internship"
          link="/digital-marketing-course-certification.html"
        />
      </div>
    </div>
  );
};

export default CoursesContainer;
