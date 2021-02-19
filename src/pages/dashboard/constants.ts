import Illustration from '../../assets/images/Group2.png';
import Graphic from '../../assets/images/Group3.png';
import Photo1 from '../../assets/images/photo1.png';
import Photo2 from '../../assets/images/photo2.png';


const allItems = [
        [
            {src: Illustration},
            {src: Graphic},
        ],
        [
            {src: Photo1},
            {src: Photo2},
        ],
        [
            {src: Photo2},
            {src: Photo1},
        ],
];

export const getCourseItems = (tabNumber: number) => (
    allItems[tabNumber]
)