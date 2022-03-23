import type { NextPage } from 'next'
import { ContainerDivider, ContainerParagraphComponent } from '../Components/Container'
import DescriptionSection from '../Components/Sections/Home/DescriptionSection'
import WhoIsSection from '../Components/Sections/Home/WhoIsSection'
import { Title } from '../Components/Title'

const Home: NextPage = () => {
  return (
    <>
      <DescriptionSection />
      <WhoIsSection />
    </>
  )
}

export default Home
