import React from 'react'
import RecipeSection from './RecipeSection'
import NextPage from './NextPage'

const Content = ({ recipe, totalPost, postPerPage, setcurrent, current, loading, error }) => {
    return (
        <>
            <div className="wrapper">
                {
                    loading && <h6 style={{color:'white'}}>Loading......</h6>
                }
                {
                    !loading && error && <h1>Error: {error}</h1>
                }
                {
                    !loading && !error && recipe.map((recipe, index) => (
                        <RecipeSection
                            key={index}
                            title={recipe.recipe.label}
                            img={recipe.recipe.image}
                        />
                    ))
                }
            </div >
            <NextPage
                totalPost={totalPost}
                postPerPage={postPerPage}
                setcurrent={setcurrent}
                current={current}
            />
        </>
    )
}

export default Content