import Header from "~/components/Layout/Header";
import FirstPage from "~/Pages/FirstPage";
import Ecosystem from "~/Pages/Ecosystem";
import Footer from "~/components/Layout/Footer";
import SupportedNetwork from "~/Pages/SupportedNetwork";
import HowItWork from "~/Pages/HowItWork";
import LidoDAO from "~/Pages/LidoDAO";
import NotificationBot from "~/Pages/NotificationBot";
import Audits from "~/Pages/Audits";
import Validators from "~/Pages/Validators";
import StakeLido from "~/Pages/StakeLido";
import Blog from "~/Pages/Blog";
import Community from "~/Pages/Community";
import Email from "~/Pages/Email";

function App() {
    return (
        <>
            <Header/>
            <FirstPage/>
            <SupportedNetwork/>
            <HowItWork/>
            <LidoDAO/>
            <NotificationBot/>
            <Ecosystem/>
            <Audits/>
            <Validators/>
            <StakeLido/>
            <Blog/>
            <Community/>
            <Email/>
          
     
          
        </>
    );
}

export default App;
