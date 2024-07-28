import React from "react";
import ArticlePreview from "@/components/Post/article";
import World from "../../assets/icons/world.svg";
import Article from "../../assets/icons/article.svg";
import { NewspaperIcon } from "@heroicons/react/24/solid";

export default function PostPreview() {
  return (
    <div className="flex flex-col justify-center items-start py-16 w-full gap-8">
      <div>
        <h1 
          className="flex justify-center items-center gap-2 text-4xl font-bold text-white-950"
        >
          <NewspaperIcon className="w-12 mr-2" />
          Últimos posts
        </h1>
      </div>
      <div className="w-full">
        <section className="bg-white">
          <div className="lg:py-16 lg:px-6">
            <div className="grid gap-8 lg:grid-cols-3">
                <ArticlePreview 
                  banner="https://images.unsplash.com/photo-1648854006531-361649aa182c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  icon={Article} date="Hoje" 
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
                  colorBgBadge="bg-mandy-300"
                  colorTextBadge="text-mandy-800"
                  textBadge="Artigo"
                />
                <ArticlePreview 
                  banner="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
                  iconFill="fill-mandy-800" icon={World} date="Há 20 dias" 
                  link="/guia-figma-devs" 
                  title="Guia de Figma para Devs" 
                  description="Pra você que é dev e quer melhorar suas skills com figma e tirar aquele projetinho ou portfólio da cabeça sem precisar passar horas em um curso."
                  colorBgBadge="bg-mandy-300"
                  colorTextBadge="text-mandy-800"
                  textBadge="Guia"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}