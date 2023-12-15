import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar, Loading, Header } from '../component'


const HomeLayout = ()=> {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'

    return <>
        <Header />
        <Navbar />
        {isPageLoading ? (
            <Loading />
        ) : (
            <section className='align-elm py-20'>
            <Outlet />
            </section>
        )}
    </>
}


export default HomeLayout