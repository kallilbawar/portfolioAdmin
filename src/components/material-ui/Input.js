import TextField from '@material-ui/core/TextField';

export function BasicTextFields({ id, label, onChange, type }) {

  return(<TextField type={type} id={id} onChange={onChange} label={label} />)
}
