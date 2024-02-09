export default function episodeSplitter(allEps, epsPerPage = 13) {
  let episodes = [];
  let epsPage = [];

  const validateLastPage = (i) => {
    return epsPage.length === epsPerPage || i === allEps.length - 1;
  };

  for (let i = 0; i < allEps.length; i++) {
    const episode = allEps[i];
    epsPage.push(episode);

    if (validateLastPage(i)) {
      episodes.push(epsPage);
      epsPage = [];
    }
  }

  return episodes;
}
