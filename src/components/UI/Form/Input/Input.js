import React from 'react'
import classess from './Input.module.css'

const Input = (props) => {
    let inputElements = null
    const inputClassess = [classess.InputElements]
    if(props.invalid && props.shouldValidated && props.touched){
        inputClassess.push(classess.Invalid)
    }
    switch(props.elementType){
        case('input'):
        inputElements= <input 
            className={inputClassess.join(' ')}
            {...props.elementConfig}
            onChange={props.changed}
            value={props.value}/>
        break;
        case('textArea'):
            inputElements = <textarea 
                className={inputClassess.join(' ')}
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value}/>
            break;
        case('select'):
            inputElements =(
                <select 
                    className={inputClassess.join(' ')}
                    onChange={props.changed}
                    value={props.value}
                >
                {props.elementConfig.options.map(option=>(
                    <option key ={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
                </select>)
            break;
        
        default:
            inputElements= <input
                className={ inputClassess.join(' ')}
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value}/>
        
    }

    return (
        <div className={classess.Input}>
            <label className={classess.Label}> {props.label}   </label>
            {inputElements} 
        </div>
    )
}

export default Input
