import CustomerLogo from '../../assets/icons/customer.svg'
import DashboardLogo from '../../assets/icons/dashboard.svg'
import ShoppingListLogo from '../../assets/icons/shopping-list.svg'

export const getSidebarItems = () => ([
    {path: '/', icon: DashboardLogo },
    {path: '/shopping-list', icon: ShoppingListLogo },
    {path: '/customer-logo', icon: CustomerLogo },
])