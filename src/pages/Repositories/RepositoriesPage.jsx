import React,{useState,useEffect, useLayoutEffect} from "react";

import { Container, Sidebar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./UserRepo";

import { getLangsFrom } from "../../utils/getLangs";

function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState("");
  
  const user = {
    login: "WRSG-Goncalves",
    name: "Wilson Gonçalves",
    avatar_url: "https://avatars.githubusercontent.com/u/62620096?v=4",
    followers: 1,
    following: 2,
    company: null,
    blog: "http://wilsonrsg.com.br",
    location: "São Paulo - Brazil"
  };
  const repositories = [
    { id: 1,
      name: "Repo 1",
      description: "Descrição",
      html_url: "http://wilsonrsg.com.br",
      language: "javascript",
      location: "São Paulo - SP"
    },

    {
      id: 2,
      name: "Repo 2",
      description: "Descrição",
      html_url: "http://wilsonrsg.com.br",
      language: "react",
      location: "São Paulo - SP"
    },

    { id: 3,
      name: "Repo 3",
      description: "Descrição",
      html_url: "http://wilsonrsg.com.br",
      language: "javascript",
      location: "PHP"
    },

    { id: 4,
      name: "Repo 4",
      description: "Descrição",
      html_url: "http://wilsonrsg.com.br",
      language: "typescript",
      location: "São Paulo - SP"
    },

    {
      id: 5,
      name: "Repo 5",
      description: "Descrição",
      html_url: "http://wilsonrsg.com.br",
      language: "java",
      location: "São Paulo - SP"
    },

    { 
      id: 6,
      name: "Repo 6",
      description: "Descrição",
      html_url: "http://wilsonrsg.com.br",
      language: "java",
      location: "São Paulo - SP"
    },

    {
      id: 7,    
      name: "Repo 7",
      description: "Descrição",
      html_url: "http://wilsonrsg.com.br",
      language: "delphi",
      location: "São Paulo - SP"
    },

    {
      id: 8,
      name: "Repo 8",
      description: "Descrição",
      html_url: "http://wilsonrsg.com.br",
      language: "delphi",
      location: "São Paulo - SP"
    },

    {
      id: 9,
      name: "Repo 9",
      description: "Descrição",
      html_url: "http://wilsonrsg.com.br",
      language: "delphi",
      location: "São Paulo - SP"
    }
  ];

  useEffect(() => {        
    if (currentLanguage === undefined || currentLanguage === "" ) {      
      setCurrentLanguage(undefined);    
    }      
  },[]);

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
