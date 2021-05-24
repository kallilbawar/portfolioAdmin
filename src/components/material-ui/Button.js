import Button from '@material-ui/core/Button';

export function ContainedButtons({ type, variant, color, children, onClick}) {

  return( <Button type={type} variant={variant} onClick={onClick} color ={color}>{children}</Button>)
}
