import './course.scss'
import CourseContent from "./components/course-content/CourseContent";
import CourseHeading from "./components/course-heading/CourseHeading";

interface Items {
    items: Array<any>;
    setTabNumber: Function;
}

const Courses = ({items, setTabNumber}: Items) => {
    return (
        <div className='courses d_grid'>
            <CourseHeading setTabNumber={setTabNumber}/>
            <CourseContent items={items}/>
        </div>
    )
}

export default Courses;