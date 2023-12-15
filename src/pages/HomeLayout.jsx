import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar, Loading, Header, Footer } from '../component'


const HomeLayout = ()=> {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'

    return <>
        <Header />
        <Navbar />
        {isPageLoading ? (
            <Loading />
        ) : (
            <section className='align-elm py-4'>
                <Outlet />
            </section>
        )}
        <Footer />
    </>
}


export default HomeLayout