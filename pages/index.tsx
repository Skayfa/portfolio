import type { NextPage } from 'next'
import ModalComponent from '../Components/Modal/ModalComponent'
import DescriptionSection from '../Components/Sections/Home/DescriptionSection'
import WhoIsSection from '../Components/Sections/Home/WhoIsSection'
import WorkSection from '../Components/Sections/Home/WorkSection'
import WorkSpaceSection from '../Components/Sections/Home/WorkSpaceSection'

const Home: NextPage = () => {
  return (
    <>
      <DescriptionSection />
      <WhoIsSection />
      <WorkSection />
      <WorkSpaceSection />
    </>
  )
}

export default Home
