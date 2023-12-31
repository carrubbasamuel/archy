

import { Col, Row } from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';
import LayoutPage from '../Layout/layout_page';
import CarouselHome from '../components/carousel-home/carousel-home';
import FirstSection from '../components/first-section-home/firstSection';
import NumberOfProject from '../components/number-of-project/numberOfProject';
import './style/home.css';
import { Fade } from 'react-reveal';


export default function Home() {
    

    return (
        <LayoutPage>
            <div id="home">
                <CarouselHome />
                <main>
                    <div className='first-section' >

                        <FirstSection />

                        <Row className='pro'>
                            <Col>
                            <Fade bottom cascade>
                                <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} /> <p className='m-0 ms-2'>Feasibility Studies</p> </div>
                                <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Conceptual Design</p></div>
                                <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Design Development</p></div>
                            </Fade>
                            </Col>
                            <Col>
                            <Fade bottom cascade>
                                <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Permitting and Approvals</p></div>
                                <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Construction Documents</p></div>
                                <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Bidding and Negotiation</p></div>
                            </Fade>
                            </Col>
                            <Col>
                            <Fade bottom cascade>
                                <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Construction Administration</p></div>
                                <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Post-Occupancy Evaluation</p></div>
                                <div className='d-flex align-items-center justify-content-start mt-2'> <FiPlus size={24} />  <p className='m-0 ms-2'>Project Management</p></div>
                            </Fade>
                            </Col>
                        </Row>

                        <NumberOfProject />
                    </div>
                </main>

            </div>
        </LayoutPage>
    );
}



