const Button = ({handleSelect, Selected, uri }) => {
    return (
       <button className=
        { Selected? "selected" : "unselected" }
        onClick = {() => handleSelect(uri)} > 
        {   Selected ? 'Deselect' : 'Select'} 
    </button>
    );
  };
  
  export default Button;