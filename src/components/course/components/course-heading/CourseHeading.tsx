import Tabs from 'antd/lib/tabs';

const { TabPane } = Tabs;

interface SetterFunc {
    setTabNumber: Function;
}

const CourseHeading = ({ setTabNumber }:SetterFunc) => (
    <div className='course-header-container d_grid'>
        <span className='heading'>Courses</span>
        <div className='tabs'>
            <Tabs onChange={(key) => {setTabNumber(key)}}>
                <TabPane tab="Popular" key={0}/>
                <TabPane tab="Favourite" key={1}/>
                <TabPane tab="New" key={2}/>
            </Tabs>
        </div>

    </div>
)

export default CourseHeading