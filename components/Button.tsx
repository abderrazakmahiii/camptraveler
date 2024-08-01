import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center px-2 py-1 justify-center bg-green-600 text-white rounded ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="ml-2 bold-16 whitespace-nowrap">{title}</span>
    </button>
  );
};

export default Button;
