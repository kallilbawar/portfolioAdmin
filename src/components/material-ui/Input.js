import TextField from '@material-ui/core/TextField';

export function BasicTextFields({ id, label, onChange }) {

  return(<TextField id={id} onChange={onChange} label={label} />)
}
