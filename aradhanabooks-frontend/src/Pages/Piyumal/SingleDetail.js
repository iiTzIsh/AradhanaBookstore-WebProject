import {Box} from "@mui/material"
import HomeHead from '../../Components/Sasin/HomeHead.js'
import HomeFoot from "../../Components/Sasin/HomeFoot.js"
import WcReqDetail from "../../Components/Piyumal/WcReqDetail.js";


const Single = () => {
    return(
        <div>
            <Box>
            <HomeHead />
            <br/>
            <br/>
            <br/>     
            <WcReqDetail/>
            <br/>
            <br/>
            <HomeFoot/>
            </Box>
        </div>
    );

}
export default Single;