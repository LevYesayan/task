import { getCourseItems } from "./constants";
import { useState } from "react";

const useDashboard = () => {

    const [tabNumber, setTabNumber] = useState(0);

    const items = getCourseItems(tabNumber);

    return { items, setTabNumber }
}

export default useDashboard;