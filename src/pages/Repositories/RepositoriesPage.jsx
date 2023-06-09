import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading, Container, Sidebar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./UserRepo";
import { getLangsFrom } from "../../utils/getLangs";
import api from "../../services/api";

function RepositoriesPage() {
  const { login } = useParams();
  const [user, setUser] = useState();
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState([]);
  const [languages, setLanguages] = useState([]);
  const getUser = async () => api.get(`/users/${login}`);
  const getRepos = async () => api.get(`/users/${login}/repos`);
  
  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login)
        ]);

        setUser(userResponse.data);
        setRepositories(repositoriesResponse.data);
        setLanguages(getLangsFrom(repositoriesResponse.data));
        setLoading(false);
    };
    loadData();
        if (currentLanguage === undefined || currentLanguage === "") {
          setCurrentLanguage(undefined);
        }
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando</Loading>;
  }

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
