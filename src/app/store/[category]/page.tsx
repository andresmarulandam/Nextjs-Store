interface CategoryParams {
  params: {
    category: string;
  };
}
export default function Category(props: CategoryParams) {
  const { category } = props.params;
  return <h1>Categoria Dinamica: {category}</h1>;
}
