import { IconType } from 'react-icons';

interface SocialIconProps {
  redirect: string;
  Icon: IconType;
  color?: string;
}

export function SocialIcon({
  redirect,
  Icon,
  color = 'black',
}: SocialIconProps) {
  return (
    <a href={redirect} target="_blank" rel="noopener noreferrer">
      <Icon size={40} color={color} />
    </a>
  );
}
