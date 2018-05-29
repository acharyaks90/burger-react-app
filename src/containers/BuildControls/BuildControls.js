import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type : 'salad'},
    {label: 'Bacon', type : 'bacon'},
    {label: 'Meat', type : 'meat'},
    {label: 'Cheese', type : 'cheese'}

]


const buildControls = (props)=>{
   return <div className={classes.BuildControls}>
        {controls.map(ctrl=>(
            <BuildControl ingredientAdded={()=>props.ingredientAdded(ctrl.type)}
                          key={ctrl.label} label={ctrl.label}
                          removeIngredient={()=>props.ingredientRemoved(ctrl.type)}  ></BuildControl>
        ))}
    </div>
}


export default buildControls;