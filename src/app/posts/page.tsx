import Link from "next/link";
import Image from "next/image";
import ArticlePreview from "@/components/Post/article";
import Cam from "../../assets/icons/cam.svg";
import Article from "../../assets/icons/article.svg";

export default function PostPreview() {
  return (
    <div className="flex flex-col justify-center items-start py-16 w-full gap-8">
      <div>
        <h1 
          className="text-2xl font-bold text-white-950"
        >
          Últimos posts
        </h1>
      </div>
      <div className="w-full">
        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
                <ArticlePreview 
                  banner="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxzm2memnoyspiaim3t23.png"
                  icon={Cam} date="Hoje" 
                  link="/figma-fundamentos" 
                  title="Figma para começar bem" 
                  description="Esse post é para você que já se aventurou no figma mas não sabe aplicar as melhores práticas para otimizar sua vida ou de sua equipe."
                  colorBgBadge="bg-mandy-300"
                  colorTextBadge="text-mandy-800"
                  textBadge="Artigo"
                />
                <ArticlePreview 
                  banner="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  iconFill="" icon={Article} date="Há 15 dias" 
                  link="/componentes-js-html" 
                  title="Guia de Components - para quem tem pressa!" 
                  description="Entendendo a base de Shadown DOM e componentização com JS em páginas HTML."
                  colorBgBadge="bg-saffron-300"
                  colorTextBadge="text-saffron-800"
                  textBadge="Artigo"
                />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}