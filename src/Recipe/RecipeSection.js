import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const RecipeSection = ({ title, img }) => {
    return (
        <Link to={`/item/${title}`} style={{ textDecoration: "none", color: "black" }}>
            <motion.div className='recipe-section'
                initial={{ opacity: 1, scale: 0, x: -300 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="recipe-container"
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.6 }}
                >
                    <img src={img} alt="image..." className='img' />
                    <p>{title.length < 30 ? title : `${title.slice(0, 30)}...`}</p>
                </motion.div>
            </motion.div>
        </Link>
    )
}


export default RecipeSection