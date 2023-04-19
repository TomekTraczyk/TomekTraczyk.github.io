import MenuBar from "../components/MenuBar";
import MainSection from "../components/MainSection";

function ErrorPage() {
    return(
        <div className="App" style={{height: '200vh'}}>
            <MenuBar></MenuBar>
            <MainSection header="Ups! Tu już nic nie ugotujemy... " body="wróć do na stronę główną i znajdź coś smakowitego!"></MainSection>
        </div>
    )
}

export default ErrorPage;