import {Box} from "@mui/material"
import HomeHead from '../../Components/Sasin/HomeHead.js'
import HomeFoot from "../../Components/Sasin/HomeFoot.js"
import WcusView from "../../Components/Piyumal/WcusView.js";



const CusView = () => {
    return(
        <div>
            <Box>
            <HomeHead />
            <br/>
            <br/>     
            <WcusView/>
            <br/>
            <br/>
            <HomeFoot/>
            </Box>
        </div>
    );

}
export default CusView;