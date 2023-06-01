import { langColors } from "../services/config";

export const getLangsFrom = (repositories) => {
  let stats = repositories
    .map((repository) => repository.language)
    .reduce(
      (data, languages) => ({
        ...data,
        [languages]: (data[languages] || 0) + 1
      }),
      []
    );

  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLocaleLowerCase()]
    }))
    .sort((a, b) => b.count - a.count);

  return stats
}