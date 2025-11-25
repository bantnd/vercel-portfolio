import { Github, Linkedin, Send, Mail, type LucideIcon as LucideIconType } from 'lucide-react';

interface LucideIconProps {
  name: string;
  size?: string | number;
  className?: string;
}

// Map of available icons
const iconMap: Record<string, LucideIconType> = {
  Github,
  Linkedin,
  Send,
  Mail,
};

const LucideIcon = ({ name, size = "1.25rem", className }: LucideIconProps) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon map`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default LucideIcon;
