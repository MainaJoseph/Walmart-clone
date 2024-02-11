type Props = {
  searchParams: {
    q: string;
  };
};

async function Search({ searchParams: { q } }: Props) {
  // Fetch the search Results
  const results = await fetchSearch(q);
  return <div>Search Page</div>;
}

export default Search;
