import Button from '@material-ui/core/Button';

export function ContainedButtons({ type, variant, color, children}) {

  return( <Button type={type} variant={variant} color ={color}>{children}</Button>)
}
