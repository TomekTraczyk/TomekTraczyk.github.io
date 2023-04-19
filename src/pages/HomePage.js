import MenuBar from "../components/MenuBar";
import MainSection from "../components/MainSection";
import RecipeSection from "../components/RecipeSection";

function HomePage() {
    const recipes = [
        [
            1,
            'Kanapka z pasztetem',
            '/kanapka.jpg',
            'Szybka i wspaniała',
            ['chleb', 'pasztet', 'ogórek kiszony', 'masło'],
            'Ukorić kromkę chleba, posmarować niewielką ilością masła, potem większą ilością pasztetu. Kanapki przyozdobić plasterkami ogórków.'
        ],
    ];

    return(
        <div className="App" style={{height: '200vh'}}>
            <MenuBar></MenuBar>
            <MainSection header="Przepisy z całego świata" body="Autorstwa szefa Tomasza Traczyka"></MainSection>
            {recipes.map((recipe) =>
                <RecipeSection
                    key={recipe[0]}
                    name={recipe[1]}
                    imageSrc={recipe[2]}
                    description={recipe[3]}
                    ingridients={recipe[4]}
                    instruction={recipe[5]}
                />
            )}
        </div>
    )
}

export default HomePage;