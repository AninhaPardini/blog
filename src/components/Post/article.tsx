import Link from "next/link";
import Image from "next/image";
import ArrowRight from "../../assets/icons/arrowRight.svg";

interface ArticleProps {
  icon: string;
  title: string;
  description: string;
  date: string;
  link: string;
  banner: string;
  textBadge: string;
  colorBgBadge: string;
  colorTextBadge: string;
  iconFill: string;
}

export default function ArticlePreview(props: any) {
  const badgeStyles = [
    props.colorBgBadge,
    props.colorTextBadge,
    "text-sm",
    "font-medium",
    "inline-flex",
    "items-center",
    "psx-2.5",
    "py-1",
    "rounded",
    "px-2",
    "gap-2",
    "bg-opacity-90",
    "font-semibold"
  ].join(" ");

  return (
    <article
      className="p-6 bg-white rounded-xl border border-white-200 shadow-md transition-all duration-300 hover:shadow-xl flex flex-col gap-4"
    >
      <div>
        <div 
          className="mb-4 relative"
        >
          <Image src={props.banner} className="max-h-[230px] object-cover" width={672} height={230} alt="Banner"/>

          <div className="flex w-full justify-between items-center px-4 py-4 absolute top-0">
            <span 
              className={badgeStyles}
            >
              <Image 
                className="text-mandy-300"
                width={16} height={16}
                src={props.icon} alt="Icone de Câmera"/>
              {props.textBadge}
            </span>
            <span 
              className="text-sm font-semibold py-1 px-2 bg-mandy-50 rounded bg-opacity-90 text-white-900">
              {props.date}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <Link 
              href={props.link}
            >
              {props.title}
            </Link>
          </h2>
          <p 
            className="mb-5 font-light text-gray-500 dark:text-gray-400"
          >
            {props.description}
          </p>
        </div>
      </div>
      <div 
        className="flex justify-between items-center"
      >
        <Link 
          href={props.link} 
          className="inline-flex items-center font-medium text-primary-600 gap-2 dark:text-primary-500 hover:underline"
        >
          Ler mais
          <Image src={ArrowRight} alt="Seta para direita" />
        </Link>
      </div>
    </article>
  );
}