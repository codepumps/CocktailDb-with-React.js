import React, { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'
function Home() {
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('ba')
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        setLoading(true)
        async function getDrinks() {

            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                const data = await response.json();
                const { drinks } = data;
                if (!!drinks) {
                    const newDrinks = drinks.map(drink => {
                        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
                        return {
                            id: idDrink,
                            name: strDrink,
                            image: strDrinkThumb,
                            info: strAlcoholic,
                            glass: strGlass
                        }
                    });
                    setCocktails(newDrinks)
                }
                else {
                    setCocktails([])
                }
            }
            catch (error) {
                console.log(error);
            }
            setLoading(false)
        }
        getDrinks()
    }, [searchTerm])
    return (
        <main>
            <SearchForm setSearchTerm={setSearchTerm} />
            <CocktailList loading={loading} cocktails={cocktails} />
        </main>
    )
}

export default Home
