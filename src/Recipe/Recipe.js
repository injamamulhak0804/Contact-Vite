import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import './Recipe.css'
import { Route, Routes } from 'react-router-dom'
import SpecificItem from './SpecificItem'
import Content from './Content'
import Nav from './Nav'

// BsSearch

const Recipe = () => {

    const [recipe, setRecipe] = useState([]);
    const [value, setValue] = useState('');
    const [search, setSearch] = useState("all");
    const [current, setcurrent] = useState(1)
    const [postPerPage, setpostPerPage] = useState(15)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const inputRef = useRef()

    const appId = "43793eaf"
    const apiKey = "599f1cbd556fee818e2a065e2e712bfd"
    const url = `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${apiKey}&from=0&to=100&calories=591-722&health=alcohol-free`



    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw Error('Data is not recived');
                const listItem = await response.json();
                setRecipe(listItem.hits)
                setError(null)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false)
            }
        }

        (async () => setTimeout(() => {
            FetchData()
        }, 1000))()

    }, [search])



    const handleClick = () => {
        inputRef.current.focus()
        if (value) {
            setSearch(value)
            setValue('')
            setcurrent(1)
        } return
    }

    const lastPostIndex = current * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = recipe.slice(firstPostIndex, lastPostIndex)

    return (
        <>
            <Nav />        
            <Header
                value={value}
                setValue={setValue}
                handleClick={handleClick}
                inputRef={inputRef}
            />

            <Routes>
                <Route path='/'
                    element={<Content
                        error = {error}
                        loading = {loading}
                        recipe={currentPost}
                        postPerPage={postPerPage}
                        totalPost={recipe.length}
                        setcurrent={setcurrent}
                        current={current}
                    />}
                />
                <Route
                    path='/item/:title'
                    element={<SpecificItem
                        recipe={recipe}
                    />}
                />
            </Routes>
        </>

    )
}

export default Recipe