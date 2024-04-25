
import DiscountFeature from '../components/Home/DiscountFeature'
import FollowingAndStaff from '../components/Home/FollowingAndStaff'
import Collection from '../components/Home/Collection'
import Landing from '../components/Home/Landing'
import { Promotions } from '../components/Home/Promotions'
import ShopLocation from '../components/Home/ShopLocation'
import TopSearch from '../components/Home/TopSearch'

const HomePage = () => {


    return (
        <>
            <Landing />
            <Collection />
            <Promotions />
            <TopSearch />
            <FollowingAndStaff />
            <DiscountFeature />
            <ShopLocation />
        </>
    )
}

export default HomePage