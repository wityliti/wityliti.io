import logo from '@/assets/logo.png';

type Props = {
  className?: string;
};

export default function LogoMark({ className }: Props) {
  return (
    <img
      src={logo}
      alt="Wityliti"
      className={className}
      draggable={false}
      decoding="async"
      loading="eager"
    />
  );
}
