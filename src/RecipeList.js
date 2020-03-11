import React, {Component} from 'react';
import Recipe from './Recipe';
import './RecipeList.css';
import PropTypes from 'prop-types';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [{
            title: "Spagetti",
            ingredients: ["pasta", "tomato sauce", "parma cheese"],
            instructions: "Mix ingredients",
            img: "spagetti.jpg"
        },
        {
            title: "Pizza",
            ingredients: ["dough", "tomatos", "cheese", "basilic"],
            instructions: "Mix ingredients",
            img: "pizza.jpg"
        },
        {
            title: "Chocolate Cake",
            ingredients: ["chocolate", "flour", "brandy", "love"],
            instructions: "Mix ingredients",
            img: "cake.jpg"
        }
    ]
    }
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render() {
        return (
           <div className="recipe-list">
            {this.props.recipes.map((r, index) => (
                <Recipe key={index} 
                    title={r.title} 
                    ingredients={r.ingredients}
                    img={r.img}
                    instructions={r.instructions}
                />
            ))}
                <Recipe 
                title="Spagetti" 
                ingredients={['flour', 'water']}
                instructions="Mix ingredients"
                img="spagetti.jpg"
                />
                <Recipe 
                title="Pizza" 
                ingredients={['flour', 'water']}
                instructions="Mix ingredients"
                img="pizza.jpg"
                />
                <Recipe 
                title="Chocolate Cake" 
                ingredients={['flour', 'water']}
                instructions="Mix ingredients"
                img="cake.jpg"
                />
           </div> 
        )
    }
}

export default RecipeList;

