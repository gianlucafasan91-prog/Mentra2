import avatarImg from '../../images/foto2.png';

interface Avatar3DProps {
  type: 'current' | 'target';
}

export default function Avatar3D({ type }: Avatar3DProps) {
  const altText = type === 'current' ? 'Stato attuale' : 'Target performance';
  return (
    <img
      src={avatarImg}
      alt={altText}
      className="w-full h-full object-cover"
    />
  );
}
