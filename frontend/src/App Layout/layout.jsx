import { MyBox } from "../components/Search-Box"
import { Mainlayoutcomp } from "./main-layout"


const LayoutComp = ({ children }) => {
    return (
        <>
        <MyBox/>
        <Mainlayoutcomp>{children}</Mainlayoutcomp>
        </>
    );
};

export default LayoutComp;