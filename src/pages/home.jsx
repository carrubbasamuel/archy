import CarouselHome from '../components/carousel-home/carousel-home';
import LayoutPage from '../Layout/layout_page';

export default function Home(){
    return(
        <LayoutPage>
        <div id="home">
            <CarouselHome />
        </div>
        </LayoutPage>
    )
}