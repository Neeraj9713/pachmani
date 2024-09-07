
import Card from "./Card";
import Container from "./Container";
import End2 from "./End2";
import Explore from "./Explore";
import GroupPhoto from "./GroupPhoto";
import HairAddToData from "./HairAddToData";

const Haircair = () => {
    return (
        <div>
            <Explore data={"Hair care"} />
            <HairAddToData />
            <Container />
            <Explore data={"Testimonials"} />
            <p className="max-w-7xl mx-auto text-base mb-6">What our happy Customers say</p>
            <Card />
            <Explore data={"Our Certifications"} />
            <GroupPhoto />
            <End2></End2>
        </div>
    )
}
export default Haircair;