import { redirect, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'
import { OrdersList, ProductsPaginationContainer, SectionTitle } from '../component'

export const ordersQuery = (params, user) => {
    return {
      queryKey: [
        'orders',
        user.username,
        params.page ? parseInt(params.page) : 1,
      ],
      queryFn: () =>
        customFetch.get('/orders', {
          params,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }),
    }
  }
  
export const loader =
(store, queryClient) =>
    async ({ request }) => {
      const user = store.getState().userState.user
  
    if (!user) {
        toast.warn('You must be logged in to view orders')
        return redirect('/login')
    }
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ])
    try {
        const response = await queryClient.ensureQueryData(
          ordersQuery(params, user)
        )
  
        return {
          orders: response.data.data,
          meta: response.data.meta,
        }
    } catch (error) {
        console.log(error)
        const errorMessage =
          error?.response?.data?.error?.message ||
          'there was an error accessing your orders'
  
        toast.error(errorMessage)
        if (error?.response?.status === 401 || 403) return redirect('/login')
        return null
    }
}

const Orders = () => {
const { meta } = useLoaderData()
if (meta.pagination.total < 1) {
    return <section className='min-h-[22rem]'>
    <SectionTitle text='Please make an order' />
    <p className='min-h-[20rem] flex items-center justify-center'>
      <img src={VoidImg} alt="Void" className='h-[15rem] object-cover' /> 
    </p>
  </section>
}
return (
    <>
    <SectionTitle text='Your Orders' />
    <OrdersList />
    <ProductsPaginationContainer />
    </>
)
}
export default Orders