import Head from 'next/head'
import Header from './components/Header/Header'
import Profile from './components/Header/Profile'


export default function Home() {
  return (
    <div>
      <Head>
        <title>My BIo Profile</title>
      </Head>
   
        <Header  />
        <Profile />
    </div>
  )
}
