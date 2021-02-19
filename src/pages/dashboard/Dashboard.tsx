import Courses from "../../components/course/Course";
import useDashboard from "./useDashboard";

const Dashboard = () => {
    const { items, setTabNumber } = useDashboard()
    return <Courses items={items} setTabNumber={setTabNumber}/>
}

export default Dashboard;